const express = require('express')
const mongoose = require('mongoose')
const router = new express.Router()
const {findTagById,update,findTag,createTag} = require('./handler')
const logger = require('../logger')
const {handleError, makeResponse} = require('../common')
const {MESSAGE} = require('../common/constant')

/**
 * @swagger
 * /api/v1/tags/{tagId}:
 *   get:
 *     tags: 
 *       - Tags
 *     description: get tag by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: tagId
 *         description: tag id to get.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/:id', async (req, res, next) => {
  try {
    if(!mongoose.Types.ObjectId.isValid(req.params.id)) throw new Error(MESSAGE.INVALIDPARAM + req.params.id)
    const tag = await findTagById(req.params.id)
    if(!tag) throw new Error(`Unable to find tag id ${req.params.id}`)
    return res.status(200).json(makeResponse(tag))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})
/**
 * @swagger
 * /api/v1/tags?type&page&per_page:
 *   get:
 *     tags: 
 *       - Tags
 *     description: get tags with filter
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: page
 *         in: query
 *       - name: per_page
 *         in: query
 *       - in: query
 *         name: type
 *         description: Tag chức năng sản phẩm(product-functions), Tag thời điểm sử dụng(time-to-use), Tag loại da(skin-type), Tag tính năng khác của người dùng(others)
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', async (req, res, next) => {
  try {
    const filter = req.query.type? {type: req.query.type} : {}
    // const priority=req.query.priority? {type: req.query.priority} : {}
    const page = req.query.page ? Number(req.query.page) - 1 : 0
    const perpage = req.query.per_page ? Number(req.query.per_page) : 20 // config later
    const tags = await findTag(filter, page, perpage)
    res.json(makeResponse(tags))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})

/**
 * @swagger
 * /api/v1/tags:
 *   post:
 *     tags: 
 *       - Tags
 *     description: Create a tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: body
 *         name: bodyReq
 *         description: tag body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/Tag"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.post('/', async (req, res, next) => {
  try {
    if(!req.body || Object.keys(req.body).length === 0) {
      throw new Error('Body is empty')
    }
    const tag = await createTag(req.body)
    res.status(200).json(makeResponse(tag))
  }
  catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})

/**
 * @swagger
 * /api/v1/tags/{tagId}:
 *   put:
 *     tags: 
 *       - Tags
 *     description: Edit a tag
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: tagId
 *         description: tag id
 *         in: path
 *         required: true
 *       - in: body
 *         name: bodyReq
 *         description: tag body
 *         required: true
 *         schema:
 *            $ref: "#/definitions/Tag"
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.put('/:id',async (req, res, next) => {
  try {
    const validateBody = (body) => {
      const validFields = ['name','type','priority']
      if (!body || Object.keys(body).length === 0) {
        throw new Error('Body is empty')
      }
      Object.keys(body).forEach(e => {
        if(!validFields.includes(e)) throw new Error('Body contains invalid field: ' + e)
      })
    }
    validateBody(req.body)
    const updatedTag = await update(req.params.id, req.body)
    res.status(200).json(makeResponse(updatedTag))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})

/**
 * @swagger
 * /api/v1/tags/{tagId}:
 *   delete:
 *     tags: 
 *       - Tags
 *     description: delete tag by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: tagId
 *         description: tag id to delete.
 *         required: true
 *         type: string
 *     responses:
 *       200:
 *         description: Success
 *     security:
 *       - bearerAuth: []
 */
router.delete('/:id', async(req, res, next) => {
  try {
    const tag = await findTagById(req.params.id)
    if(!tag) {
      throw new Error(`Unable to find tag id ${req.params.id}`)
    }
    await update(req.params.id, {deleted: true})
    res.status(200).json(makeResponse({id: req.params.id}))
  } catch (error) {
    logger.info(`${req.originalUrl}: `, error)
    res.status(200).json(handleError(error))
  }
})

module.exports = router