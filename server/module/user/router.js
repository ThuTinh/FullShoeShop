const express = require('express')
const router = new express.Router()
const { findOne, create, update, addFriends,  addFavoritedProduct } = require('./handler')
const { getPendingOrder} = require('../order')
const { handleError, makeResponse } = require('../common')
const model = require('./model')
const refFields = ['favoriteProducts']
const { encrypt, match } = require('../crypto')
const logger = require('../logger')
const {createCart} = require('../cart')
/**
 * @swagger
 * /api/v1/users?_return_fields&page&per_page:
 *   get:
 *     tags: 
 *       - Users
 *     description: get users with filter
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         in: query
 *       - name: per_page
 *         in: query
 *       - in: query
 *         name: _return_fields
 *         description: email,firstName,lastName,password,facebookId,roles,phone,address,birthday,sex,shipAddresses,favoriteProducts
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.get('/', async (req, res, next) => {
  try {

    const returnFields = req.query._return_fields.split(',').reduce((rs, key) => {
      rs[key] = 1
      return rs
    }, { _id: 0 }) || ''
    let keys = ''
    Object.keys(returnFields).map(key => {
      refFields.map(item => {
        if (item === key) {
          keys += key + ' '
        }
      })
    })
    const page = req.query.page ? Number(req.query.page) - 1 : 0
    const perpage = req.query.per_page ? Number(req.query.per_page) : 20 // config later
    const externalFields = ['_return_fields', 'page', 'per_page']
    const conditions = Object.keys(req.query).filter(k => externalFields.indexOf(k) === -1)
      .reduce((rs, key) => {
        rs[key] = req.query[key]
        return rs
      }, {})

    const users = await model.find(conditions)
      .populate({
        path: keys,
        select: { name: 1, images: 1, rate: 1 }
      })
      .select(returnFields)
      .skip(page * perpage)
      .limit(perpage)
      .lean()
    res.status(200).json(makeResponse(users))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})



/**
 * @swagger
 * /api/v1/users/current?_return_fields&page&per_page:
 *   get:
 *     tags: 
 *       - Users
 *     description: get user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: page
 *       - in: query
 *         name: per_page
 *       - in: query
 *         name: _return_fields
 *         description: email,firstName,lastName,password,facebookId,roles,phone,address,birthday,sex,shipAddresses,favoriteProducts
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.get('/current', async (req, res, next) => {
  try {
    const page = Number(req.query.page) ? Number(req.query.page) : 0
    const perPage = Number(req.query.per_page) ? Number(req.query.per_page) : 0
    let keys = ''
    let returnFields = []
    if (req.query._return_fields) {
      returnFields = req.query._return_fields.split(',').reduce((rs, key) => {
        rs[key] = 1
        return rs
      }, {}) || ''

      Object.keys(returnFields).map(key => {
        refFields.map(item => {
          if (item === key) {
            keys += key + ' '
          }
        })
      })
    }
    const user = await model.findById(req.id).populate({
      path: keys,
      select: { name: 1, images: 1, rate: 1, skinType: 1, description: 1 },
      options: {
        limit: perPage,
        skip: page * perPage
      }
    })
      .select(returnFields)
      .lean()
    if (!user) throw new Error(`Unable to find user id ${req.id}`)
    return res.json(makeResponse(user))
  }
  catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})







/**
 * @swagger
 * /api/v1/users:
 *   post:
 *     tags: 
 *       - Users
 *     description: Create a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: user body
 *         required: true
 *         example: {
 *                     "email": "",
 *                     "firstName": "",
 *                     "lastName": "",
 *                     "password": "",
 *                     "phone": "",
 *                     "address": ""
 *                   }
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.post('/', async (req, res, next) => {
  const validateReqBody = (body) => {
    if (!body) {
      throw new Error('Missing data')
    }
    if (!body.email) {
      throw new Error(`'email' is required`)
    }
    if (!body.firstName) {
      throw new Error(`'firstName' is required`)
    }
    if (!body.lastName) {
      throw new Error(`'lastName' is required`)
    }
    if (!body.password) {
      throw new Error(`'password' is required`)
    }

    if (!body.phone) {
      throw new Error(`'phone' is required`)
    }
  }

  

  const createOrModifyUser = async (user, data) => {
    if (!user || !user.facebookId) {
      return await create(data)
    }
    return await update(user.id, data)
  }

  try {
    validateReqBody(req.body)
 
    const user = await findOne({ email: req.body.email })
    const isFacebookUser = () => user.facebookId ? true : false
    if (user && !isFacebookUser()) {
      throw new Error(`Email ${req.body.email} is already exist`)
    }
    const createdUser = await createOrModifyUser(user, req.body)




   
    //create user cart
    res.json(makeResponse(createdUser))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})


/**
 * @swagger
 * /api/v1/users/:
 *   put:
 *     tags: 
 *       - Users
 *     description: Edit a user
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: user body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/User"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/', async (req, res, next) => {
  try {
    const validateBody = (body) => {
      const validFields = ['firstName','lastName','phone','address','birthday','sex']
      if (!body || Object.keys(body).length === 0) {
        throw new Error('Body is empty')
      }
      Object.keys(body).forEach(e => {
        if(!validFields.includes(e)) throw new Error('Body contains invalid field: ' + e)
      })
      //check valid phone number
      if(body.phone && !body.phone.match(/\b0+([0-9]{9})\b/)) throw new Error('Phone number not valid')
    }
    validateBody(req.body)
    //If user change theirs phone number, force them verify phone number again
    if(req.body.phone) {
      const user = await model.findById(req.id).lean()
      // eslint-disable-next-line require-atomic-updates
      if(user.phone !== req.body.phone) req.body.isPhoneVerified = false
    }
    const updatedUser = await update(req.id, req.body)
    res.json(makeResponse(updatedUser))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})



/**
 * @swagger
 * /api/v1/users/favorited-product:
 *   put:
 *     tags: 
 *       - Users
 *     description: User favorite a product 
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: newItem
 *         example: {
 *                    "productId":""
 *                  }
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/favorited-product', async (req, res, next) => {
  //Bug  inside, still need fix
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new Error('Body is empty')
    }
    await addFavoritedProduct(req.id, req.body.productId)
    res.json(makeResponse('User favorited product successed'))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})


/**
 * @swagger
 * /api/v1/users/:
 *   delete:
 *     tags: 
 *       - Users
 *     description: delete user by id
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.delete('/', async (req, res, next) => {
  try {
    const user = await model.findById(req.id)
    if (!user) {
      throw new Error(`Unable to find user id ${req.id}`)
    }
    const deletedUser = await model.findByIdAndRemove(req.id)
    res.status(200).json(makeResponse(deletedUser))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})


/**
 * @swagger
 * /api/v1/users/changepassword:
 *   put:
 *     tags: 
 *       - Users
 *     description: change user password
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: old and new password
 *         example: {
 *                    "old":"",
 *                     "new": "",
 *                     "confirm"
 *                  }
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/changepassword', async (req, res, next) => {
  const validateReqBody = (body) => {
    if(!body.old) {
      throw new Error(`'old' is required`)
    }
    if(!body.new) {
      throw new Error(`'new' is required`)
    }

    if(!body.confirm) {
      throw new Error(`'confirm' is required`)
    }
  }

  const validateOldPassword = async (userId, password) => {
    try {
      const user = await model.findById(userId).select('password').lean()
      if(!match(password, user.password)) {
        throw new Error()
      }
    } catch (error) {
      throw new Error(`Old password is invalid`)
    }
  }

  const validateNewPasswordConfirm = (password, confirm) => {
    if(password !== confirm) {
      throw new Error(`Confirm password does not match`)
    }
  }

  try {
    validateReqBody(req.body)
    await validateOldPassword(req.id, req.body.old)
    validateNewPasswordConfirm(req.body.new, req.body.confirm)
    await model.findByIdAndUpdate(req.id, {'$set': {password: encrypt(req.body.new)}})
    res.status(200).json(makeResponse(`update password successfully`))
  } catch (error) {
    logger.error(`Failed to update password `, error)
    res.status(200).json(handleError(error))
  }

})

module.exports = router
