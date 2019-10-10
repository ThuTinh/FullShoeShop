const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { ogPath, path200 } = require('../common/constant')
const host = require('../common/host')

const rating = new Schema({
  userId: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    max: [500, 'max rate is 500'],
    min: [100, 'min rate is 100'],
    required: true
  },
  tags : [{
    _id: false,
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'tag'
    },
    score: {
      type: Number,
      min: [100, 'min rate is 100'],
      max: [500, 'max rate is 500']
    }
  }],
  time: {
    type: Number,
    required: true
  },
  comment: String
}, {_id: false})



const schema = new Schema({
  name: {
    type: String,
    required: [true, 'is required'],
    trim:true,
    index: true
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: 'brand'
  },
  images: [{
    type: String,
    trim: true
  }],
  categories: [{
    type: Schema.Types.ObjectId,
    required: [true, 'is required'],
    ref: 'category'
  }],
  description: {
    type: String,
    trim:true,
    required: [true, 'is required']
  },
  rate: {
    type: Number,
    min: 0,
    max: 500,
    default: 0
  },
  tags : [{
      type: Schema.Types.ObjectId,
      ref: 'tag'
  }],
  price: {
    type: Number,
    min: 0
  },
 Detail: [{
    size: {
      type: [String],
      trim:true,
    },
    price: {
      type: Number,
      trim:true,
    },
    quantity: {
      type: Number,
      default:0,
      min:0
    },
  }],
  favorited: {
    type: Number,
    default: 0,
    min: 0
  },
  deleted: {
    type: Boolean,
    select: false,
    default: false,
    required: [true, 'is required']
  },
  rating: [rating]
 
}, {
  timestamps: true
})


module.exports = mongoose.model('product', schema, 'products')