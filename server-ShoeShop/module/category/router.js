const express = require('express')
const router = new express.Router()
const {create, list, get,getToPost} = require('./handler')
const {handleError, makeResponse} = require('../common')
const logger = require('../logger')

router.get('/topost', async (req, res, next) => {
  const categories = await getToPost()
  res.status(200).json(categories)
 
})


/**
 * @swagger
 * /api/v1/categories:
 *   post:
 *     tags: 
 *       - Categories
 *     description: Create a category
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: category body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/Category"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.post('/', async (req, res, next) => {

  const validateReqBody = (body) => {
    if(!body.name) {
      throw new Error(`'name' is require`)
    }
    if(!body.content) {
      throw new Error(`'content' is require`)
    }
  }

  // validate existing category

  try {
    validateReqBody(req.body)
    const createdCategory = await create(req.body)
    res.status(200).json(makeResponse(createdCategory))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})
/**
 * @swagger
 * /api/v1/categories:
 *   get:
 *     tags: 
 *       - Categories
 *     description: get categories with filter
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: type
 *         in: query
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', async (req, res, next) => {
  try {
    const categories = await list(req.query.type)
    res.status(200).json(makeResponse(categories))
  } catch (error) {
    logger.error(`Unable to get categories`, error)
    res.status(200).json(handleError(error))
  }
})
/**
 * @swagger
 * /api/v1/categories/{categoryId}:
 *   get:
 *     tags: 
 *       - Categories
 *     description: get category by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         description: category id to get.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', async (req, res, next) => {
  try {
    const category = await get(req.params.id)
    res.status(200).json(makeResponse(category))
  } catch (error) {
    logger.error(`Error when getting category id ${req.params.id}`, error)
    res.status(200).json(handleError(error))
  }
})

module.exports = router