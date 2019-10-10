const express = require('express')
const router = new express.Router()
const {validateReqBody,create,findOne,findAll,update,addItem} = require('./handler')
const logger = require('../logger')
const {handleError, makeResponse} = require('../common')
// const {MESSAGE} = require('../common/constant')
/**
 * @swagger
 * /api/v1/shippers:
 *   get:
 *     tags: 
 *       - shippers
 *     description: get shippers with filter
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', async (req, res, next) => {
  try {
    const shippers = await findAll()
    res.json(makeResponse(shippers))
  }
  catch(error) {
    res.json(handleError(error))
    logger.info(`${req.originalUrl}: `, error)
  }
})
/**
 * @swagger
 * /api/v1/shippers/{name}?page&per_page:
 *   get:
 *     tags: 
 *       - shippers
 *     description: get product by shipper
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: name
 *         description: shipper name
 *         type: string
 *       - name: page
 *         in: query
 *       - name: per_page
 *         in: query
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:name', async (req, res, next) => {
  try {
    const conditions = { name: req.params.name }
    const filter = { name:1 }
    const page = Number(req.query.page) ? Number(req.query.page) : undefined
    const perPage = Number(req.query.per_page) ? Number(req.query.per_page) : undefined
    const shipper = await findOne(conditions, filter, page, perPage)
   
    if(!shipper) throw new Error('Unable to find shipper name ' + req.params.name)
    res.json(makeResponse(shipper))
  }
  catch(error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})
/**
 * @swagger
 * /api/v1/shippers:
 *   post:
 *     tags: 
 *       - shippers
 *     description: Create a shipper
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: shipper body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/shipper"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.post('/', async (req, res, next) => {
  try {
    validateReqBody(req.body)
    const isExistName = await findOne({conditions:{name: req.body.name},filter:{name:1}})
    if(isExistName) {
      throw new Error(`shipper ${req.body.name} is already exist`)
    }
    const shipper = await create(req.body)
    logger.info('created shipper')
    res.status(200).json(makeResponse(shipper))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})
  
/**
 * @swagger
 * /api/v1/shippers/{name}:
 *   put:
 *     tags: 
 *       - shippers
 *     description: update shipper's information
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: shipper name
 *         in: path
 *         required: true
 *       - in: body
 *         name: bodyReq
 *         description: shipper body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/shipper"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/:name', async (req, res, next) => {
  try {
    if(!req.body || Object.keys(req.body).length === 0) {
      throw new Error('Body is empty')
    }
    const updatedshipper = await update(req.params.name, req.body)
    logger.info('shipper edited')
    res.status(200).json(makeResponse(updatedshipper))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})
/**
 * @swagger
 * /api/v1/shippers/add-item/{shipperId}?list:
 *   put:
 *     tags: 
 *       - shippers
 *     description: Add item to shipper
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: shipperId
 *         description: shipper id
 *         in: path
 *         required: true
 *       - in: body
 *         name: bodyReq
 *         description: newItem
 *         example: {
 *                    "newId":""
 *                  }
 *         required: true
 *       - in: query
 *         name: list
 *         description: query filter
 *         required: true
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/add-item/:id', async (req, res, next) => {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      throw new Error('Body is empty')
    }

    const updatedshipper = await addItem(req.params.id, req.query.list, req.body.newId)
    res.json(makeResponse(updatedshipper))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.json(handleError(error))
  }
})
module.exports = router

