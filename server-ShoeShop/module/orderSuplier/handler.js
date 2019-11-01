const OrderSuplier = require("./model");
const { STATUS } = require("../common/constant");
const mongoose = require("mongoose");
//Used in user module

const validate = data => {
  if (!data) throw new Error("data is empty");
};

const findAll = async () => {
  return OrderSuplier.find();
};

const findOne = async id => {
  return await OrderSuplier.findById(id);
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
module.exports = { validate, create, update, remove, findAll, findOne };
