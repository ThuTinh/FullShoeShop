const Brand = require('./model')
const mongoose = require('mongoose')

const validateReqBody = (body) => {
  if (!body) {
    throw new Error('Missing data')
  }
  if (!body.name) {
    throw new Error('\'Name\' is required')
  }
 
}
const filter={
  name:1,
  images:1
}
const findAll=async()=>{
  return await Brand.find().select(filter).lean()
}
const findOne = async (conditions, returnFields, page, perPage) => {
  return await Brand.findOne(conditions)
    .populate({
      path: 'products',
      select:{name:1,images:1,description:1},
      options: {
        skip: page * perPage,
        limit: perPage
      }
    })
    .select(returnFields).lean()
}
const addItem = async (_id,filter, newId) => { 
  let object ={}
  object[filter]=newId
  const _conditions={_id}
  const brand= await Brand.findOne(_conditions).lean()
  if(brand[filter].filter(item=>item==newId).length===0)
    return await Brand.findByIdAndUpdate(_conditions, {'$push': object},{new: true, runValidators: true})
  throw new Error(filter + ' existed')
}

const removeItem = async (_id,filter, itemId) => { 
  const brand= await Brand.findById(_id)
  if(!brand[filter]) throw new Error('Unable to found item ' + filter)
  const obj = {}
  obj[filter] = mongoose.Types.ObjectId(itemId)
  return Brand.findByIdAndUpdate(_id, {'$pull': obj}, {new: true})
}
  
const create = async (data) => {
  const reg = new RegExp("^" + data.name.toLowerCase() + '$', "i")
  const old_brand = await Brand.find({name: reg}, {_id: 1}).limit(1).lean()
  if(old_brand.length > 0) throw new Error('Brand name already existed')
  const brand = new Brand(data)
  return await brand.save()
}

const update = async (id, data) => {
  return await Brand.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
module.exports={validateReqBody,findAll,findOne,create,update,addItem,removeItem}