const mongoose = require('mongoose')
const Schema = mongoose.Schema

/**
 * @swagger
 *
 * definitions:
 *   Cart:
 *     type: object
 *     properties:
 *       _id: 
 *         type: string
 *         readOnly: true
 *       products:
 *         type: array
 *         items:
 *           type: object
 *           $ref: "#/definitions/ProductByCart"
 *       user:
 *         type: objectId
 *         $ref: "#/definitions/User"
 *     required:
 *       - user
 */

/**
 * @swagger
 *
 * definitions:
 *   ProductByCart:
 *     type: object
 *     properties:
 *       _id: 
 *         type: string
 *         readOnly: true
 *       store:
 *         type: string
 *         description: 'Store id'
 *       product:
 *         type: string
 *         description: 'Product id'
 *       quantity:
 *         type: number
 *       status:
 *         type: string
 *         example: 'in-cart'
 *       deleted:
 *         type: boolean
 *         readOnly: true
 *     required:
 *       - store
 *       - product
 *       - quantity
 */
const schema = new Schema({
  products: [{
    
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product',
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: 1,
      default: 1
    },
    deleted: {
      type: Boolean,
      default: false
    }
  }],
  guid: {
    type: String,
    unique: true
  },
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {timestamps: true})


module.exports = mongoose.model('cart', schema, 'carts')