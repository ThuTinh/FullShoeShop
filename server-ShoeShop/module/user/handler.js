const {encrypt} = require('../crypto')
const User = require('./model')
const {findProductById} = require('../products')
const mongoose = require('mongoose')
// const get = async (filter, returnFields, page, numberPerPage) => {
//   return await User.find(filter).select(userReturnFileds).lean()
// }

const findOne = async (filter, returnFields = '') => {
  const conditions = filter || {}
  const userReturnFileds = returnFields
  return await User.findOne(conditions).select(`${userReturnFileds} +password`)
}

const create = async (data) => {
  if(data.password) { // facebook user is no need password
    data.password = encrypt(data.password)
  }
  const user = new User(data)
  return await user.save()
}

const update = async (id, data) => {
  if(data.password) {
    data.password = encrypt(data.password)
  }
  return await User.findByIdAndUpdate(id, data, {new: true})
}



  

//Used to add favorite
const addFavoritedProduct = async (userId, productId) => {
  const product = await findProductById(productId)
  if(!product) throw new Error('Not found product id')
  const user = await User.findById(userId)
  if(!user) throw new Error('Not found user id ', userId)
  await User.findByIdAndUpdate(userId, {'$addToSet': {favoriteProducts: productId}})
  await product.updateCountFavorite(product._id, product.favorited ? product.favorited + 1 : 1)
  return user
}


const updateUser = async (condition,id)=> await User.findByIdAndUpdate(id,condition,{new:true})

module.exports  = {create, update, findOne, addFavoritedProduct,updateUser}
