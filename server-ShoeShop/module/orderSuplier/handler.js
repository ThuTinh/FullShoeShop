const OrderSuplier = require("./model");
const { STATUS } = require("../common/constant");
const mongoose = require("mongoose");
//Used in user module

const validate = data => {
  if (!data) throw new Error("data is empty");
};

const filter = async filter => {
  const reg = new RegExp(filter, "i");
  return OrderSuplier.find({})
    .populate( "suplierId")
    .populate("employee");
};

const findOne = async id => {
  return await OrderSuplier.findById(id)
    .populate("suplierId")
    .populate("employee");
};

const create = async data => {
  const orderSuplier = new OrderSuplier(data);
  return await orderSuplier.save();
};

const update = async (id, data) => {
  return await OrderSuplier.findByIdAndUpdate(id, data, { new: true });
};

const remove = async id => {
  return await OrderSuplier.findByIdAndUpdate(
    id,
    { deleted: true },
    { new: true }
  );
};

module.exports = { validate, create, update, remove, filter, findOne };
