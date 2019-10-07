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
    // required: [true, 'is required'],
    ref: 'brand'
  },
  images: {
    type: String,
    trim: true
  },
  
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
    _id: false,
    tag: {
      type: Schema.Types.ObjectId,
      ref: 'tag'
    },
    score: {
      type: Number,
      min: 0,
      max: 500
    }
  }],
  price: {
    type: Number,
    min: 0
  },
  productDetail: [{
    _id: false,
    unit: {
      type: String,
      trim:true
    },
   
    images: {
      type: [String],
      trim:true,
      // required: [true, 'is required']
    },
    capacity: {
      type: Number,
      trim:true,
      // required: [true, 'is required']
    },
    
  }],
  
  sold_quantity: {
    type: Number,
    default:0,
    min:0
  },
  
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

const index = { name: 'text'}
schema.index(index)
schema.methods.updateCountFavorite = (id, totalFavorites) => {
  return mongoose.model('product').findByIdAndUpdate(id, {favorited: totalFavorites})
}
schema.pre('find', function() {
  this.where({deleted: false})
})
schema.post('find', function(docs) {
  for(var i = 0; i < docs.length; i++) {
    if(docs[i].images) docs[i].images = host + '/' + path200 + docs[i].images
  }
})
schema.pre('findOne', function() {
  this.where({deleted: false})
})
schema.post('findOne', function(doc) {
  if(!doc) return
  if(doc.images) doc.images = host + '/' + path200 + doc.images
  const details = doc.productDetail ? doc.productDetail : []
  for(let i = 0; i < details.length; i++) {
    if(!details[i].images) continue
    for(let j = 0; j < details[i].images.length; j++) {
      details[i].images[j] = host + '/' + ogPath + details[i].images[j]
    }
  }
})
schema.pre('findById', function() {
  this.where({deleted: false})
})
schema.post('findById', function(doc) {
  if(doc.images) host + '/' + ogPath + doc.images
})
schema.pre('findOneAndUpdate', function() {
  this.where({deleted: false})
})
schema.pre('findByIdAndUpdate', function() {
  this.where({deleted: false})
})
schema.pre('aggregate', function() {
  this.pipeline().unshift({
    $match: {
      deleted: {
        $eq: false
      }
    }
  })})
module.exports = mongoose.model('product', schema, 'products')