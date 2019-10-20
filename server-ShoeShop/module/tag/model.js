const mongoose = require('mongoose')
const Schema = mongoose.Schema
/**
 * @swagger
 *
 * definitions:
 *   Tag:
 *     type: object
 *     properties:
 *       _id: 
 *         type: string
 *         readOnly: true
 *       name:
 *         type: string
 *       type:
 *         type: string
 *         description: Tag chức năng sản phẩm(product-functions), Tag chức năng hoạt chất(ingredient-functions), Tag thời điểm sử dụng(time-to-use), Tag loại da(skin-type), Tag tính năng khác của người dùng(others)
 *       deleted:
 *         type: boolean
 *         default: false
 *         readOnly: true  
 *     required:
 *       - name
 *       - type
 */
const schema = new Schema({
  name: {
    type: String,
    required: [true, 'is required'],
    trim:true
  },
  type: {
    type: String,
    required: [true, 'is required'],
  },
  priority: {
    type: Number,
    default: 1
  },
  deleted: {
    type: Boolean,
    select: false,
    default: false,
    required: [true, 'is required']
  }
}, {timestamps: true})
schema.pre('find', function() {
  this.where({deleted: false})
})
schema.pre('findOne', function() {
  this.where({deleted: false})
})
schema.pre('findById', function() {
  this.where({deleted: false})
})
schema.pre('findOneAndUpdate', function() {
  this.where({deleted: false})
})
schema.pre('findByIdAndUpdate', function() {
  this.where({deleted: false})
})
  
module.exports = mongoose.model('tag', schema, 'tags')