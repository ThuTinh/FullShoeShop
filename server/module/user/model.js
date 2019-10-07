const mongoose = require('mongoose')
const Schema = mongoose.Schema
const host = require('../common/host')
const {pathAvatar} = require('../common/constant')

const schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName:{
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    select: false
  },
  facebookId: {
    type: String
  },
  googleId: {
    type: String
  },
  avatar:{
    type: String,
  },
 
  roles: [
    {
      type: String,
      default:'customer'
    }
  ],
  phone:{
    type: String,
    trim: true,
    unique: true
  },

 
  address:{
    type: String,
  },
  birthday:{
    type: Date
  },
  sex:{
    type: Boolean
  },
  shipAddress:[{
    type: String
  }],
 


  favoriteProducts: [
    { type: Schema.Types.ObjectId, ref: 'product' }
  ],
 
  deleted:{
    type: Boolean,
    default: false
  }
},{timestamps: true})


schema.post('find', function(docs) {
  if(docs.length <= 0) return
  for(let i = 0; i < docs.length; i++) {
    if(docs[i] && docs[i].avatar && !docs[i].avatar.includes('https://')) docs[i].avatar = host + '/' + pathAvatar + docs[i].avatar
  }
})
const user = mongoose.model('user', schema, 'users')
module.exports = user