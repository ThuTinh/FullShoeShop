const Product = require("./model");
const mongoose = require("mongoose");

const validateReqBody = body => {
  if (!body) {
    throw new Error("Missing data");
  }
  if (!body.name) {
    throw new Error("'Name' is required");
  }
};
const filter = {
  name: 1,
  images: 1
};

const findAll = async () => {
  return await Product.find().populate({
    path: "categories",
    populate: { path: "parent" }
  });
};

const findOne = async (conditions, returnFields, page, perPage) => {
  return await Product.findOne(conditions)
    .populate({
      path: "products",
      select: { name: 1, images: 1, description: 1 },
      options: {
        skip: page * perPage,
        limit: perPage
      }
    })
    .select(returnFields)
    .lean();
};

const findProductById = async id => {
  return await Product.findById(id);
};

const addItem = async (_id, filter, newId) => {
  let object = {};
  object[filter] = newId;
  const _conditions = { _id };
  const product = await Product.findOne(_conditions).lean();
  if (product[filter].filter(item => item == newId).length === 0)
    return await Product.findByIdAndUpdate(
      _conditions,
      { $push: object },
      { new: true, runValidators: true }
    );
  throw new Error(filter + " existed");
};

const removeItem = async (_id, filter, itemId) => {
  const product = await Product.findById(_id);
  if (!product[filter]) throw new Error("Unable to found item " + filter);
  const obj = {};
  obj[filter] = mongoose.Types.ObjectId(itemId);
  return product.findByIdAndUpdate(_id, { $pull: obj }, { new: true });
};

const create = async data => {
  const reg = new RegExp("^" + data.name.toLowerCase() + "$", "i");
  const old_product = await Product.find({ name: reg }, { _id: 1 })
    .limit(1)
    .lean();
  if (old_product.length > 0) throw new Error("product name already existed");
  const product = new Product(data);
  return await product.save();
};

const update = async (id, data) => {
  return await Product.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  });
};

const remove = async id => {
  return await Product.findByIdAndUpdate(id, { deleted: true }, { new: true });
};

const getDetail = async id => {
  return await Product.findById(id).select("Detail");
};

// const update = async (_id, data ,filter, newId) => {
//   let object ={}
//   object[filter]=newId
//   const user= await User.findById(_id).lean()
//   if(!user[filter] || user[filter].filter(item=>item==newId).length===0)
//     return await User.findByIdAndUpdate(_id, {'$addToSet': object},{new: true})
//   throw new Error(filter + ' existed')
// }

module.exports = {
  validateReqBody,
  findAll,
  findOne,
  create,
  update,
  addItem,
  removeItem,
  remove,
  getDetail,
  findProductById
};
