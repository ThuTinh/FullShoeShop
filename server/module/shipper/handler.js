const Shipper = require('./model')
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
  return await Shipper.find().select(filter).lean()
}
const findOne = async (conditions, returnFields, page, perPage) => {
  return await Shipper.findOne(conditions)
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
  const shipper= await Shipper.findOne(_conditions).lean()
  if(shipper[filter].filter(item=>item==newId).length===0)
    return await Shipper.findByIdAndUpdate(_conditions, {'$push': object},{new: true, runValidators: true})
  throw new Error(filter + ' existed')
}

const removeItem = async (_id,filter, itemId) => { 
  const shipper= await Shipper.findById(_id)
  if(!shipper[filter]) throw new Error('Unable to found item ' + filter)
  const obj = {}
  obj[filter] = mongoose.Types.ObjectId(itemId)
  return Shipper.findByIdAndUpdate(_id, {'$pull': obj}, {new: true})
}
  
const create = async (data) => {
  const reg = new RegExp("^" + data.name.toLowerCase() + '$', "i")
  const old_shipper = await Shipper.find({name: reg}, {_id: 1}).limit(1).lean()
  if(old_shipper.length > 0) throw new Error('shipper name already existed')
  const shipper = new Shipper(data)
  return await shipper.save()
}

const update = async (id, data) => {
  return await Shipper.findByIdAndUpdate(id, data, {new: true, runValidators: true})
}
module.exports={validateReqBody,findAll,findOne,create,update,addItem,removeItem}