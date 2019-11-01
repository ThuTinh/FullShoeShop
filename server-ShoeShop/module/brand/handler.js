const Brand = require("./model");
const mongoose = require("mongoose");

const validateReqBody = body => {
  if (!body) {
    throw new Error("Missing data");
  }
  if (!body.name) {
    throw new Error("'Name' is required");
  }
  if (!body.products) {
    throw new Error("products is required");
  }

  if (!body.phone) {
    throw new Error("phone is required");
  }
  if (!body.email) {
    throw new Error("email is required");
  }
  if (!body.address) {
    throw new Error("address is required");
  }
};

const findAll = async () => {
  return await Brand.find({}).lean();
};
const findOne = async (conditions, returnFields) => {
  return await Brand.findOne(conditions)
    .select(returnFields)
    .lean();
};

const addProductId = async (id, productId) => {
  // let exist = await Brand.find(
  //   {
  //     _id: id
  //   },
  //   { products: { $elemMatch: { productId: productId } } }
  // );
  // if (exist) {
  //   throw new Error("productID existed !");
  // } else {
  //   await Brand.findById(id, function(err, brand) {
  //     if (productId) {
  //       brand.products.push(productId);
  //     }
  //     brand.markModified("products");
  //     brand.save();
  //   });
  // }
  return await Brand.findOneAndUpdate(
    { _id: id },
    { $pull: { products: { productId } } },
    { new: true, runValidators: true }
  );
};

const removeProductId = async (id, _productId) => {
  return await Brand.findOneAndUpdate(
    { _id: id },
    { $push: { products: { productId: _productId } } },
    { new: true, runValidators: true }
  );
};
const getNameBrand = async () => {
  return await Brand.find({}).select("_id name");
};
const getProductIds = async id => {
  var productIds = {};
  await Brand.findById(id, function(err, brand) {
    productIds = brand.products;
  });
  return productIds;
};

// const addItem = async (_id,filter, newId) => {
//   let object ={}
//   object[filter]=newId
//   const _conditions={_id}
//   const brand= await Brand.findOne(_conditions).lean()
//   if(brand[filter].filter(item=>item==newId).length===0)
//     return await Brand.findByIdAndUpdate(_conditions, {'$push': object},{new: true, runValidators: true})
//   throw new Error(filter + ' existed')
// }

// const removeItem = async (_id,filter, itemId) => {
//   const brand= await Brand.findById(_id)
//   if(!brand[filter]) throw new Error('Unable to found item ' + filter)
//   const obj = {}
//   obj[filter] = mongoose.Types.ObjectId(itemId)
//   return Brand.findByIdAndUpdate(_id, {'$pull': obj}, {new: true})
// }

const create = async data => {
  const reg = new RegExp("^" + data.name.toLowerCase() + "$", "i");
  // const old_brand = await Brand.find({name: reg}, {_id: 1}).limit(1).lean()
  const old_brand = await Brand.find({ name: reg })
    .limit(1)
    .lean();
  if (old_brand.length > 0) throw new Error("Brand name already existed");
  const brand = new Brand(data);
  return await brand.save();
};

const update = async (id, data) => {
  return await Brand.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};
module.exports = {
  validateReqBody,
  findAll,
  findOne,
  create,
  update,
  addProductId,
  removeProductId,
  getNameBrand,
  getProductIds
};
