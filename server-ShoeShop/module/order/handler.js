const Order = require("./model");
const { STATUS } = require("../common/constant");
const mongoose = require("mongoose");

const validate = body => {
  if (!body) {
    throw new Error("body is empty");
  }
};

const findAll = async () => {
  return await Order.find();
};

const findOne = async id => {
  return await Order.findById(id);
};

const update = async (id, data) => {
  return await Order.findByIdAndUpdate(id, data, { new: true });
};

const addProductItem = async (id, productItem) => {
  return Order.findOneAndUpdate(
    { _id: id },
    { $push: { products: productItem } },
    { new: true, runValidators: true }
  );
};

const removeProductItem = async (id, productItem) => {
  return Order.findOneAndUpdate(
    { _id: id },
    { $pull: { products: productItem } },
    { new: true, runValidators: true }
  );
};

const getOrderOfUser = async id => {
  return await Order.find({ userId: mongoose.Types.ObjectId(id) });
};
const create = async body => {
  const order = new Order(body);
  return order.save();
};
module.exports = {
  findAll,
  validate,
  findOne,
  update,
  addProductItem,
  removeProductItem,
  create
};
