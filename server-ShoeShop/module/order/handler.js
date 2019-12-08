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
  return await Order.findById(id).populate("products.productId");
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

const removeProductItem = async (id, productItemId) => {
  try {
    const order = await Order.findById(id);
    let total = parseInt(order.totalPrice);

    for (let i = 0; i < order.products.length; i++) {
      if (order.products[i]._id == productItemId) {
        total =
          parseInt(order.totalPrice) -
          parseInt(order.products[i].price) *
            parseInt(order.products[i].quantity);
        console.log(
          "total ne",
          total,
          order.totalPrice,
          order.products[i].price,
          order.products[i].quantity
        );
        return await Order.findOneAndUpdate(
          { _id: id },
          {
            $pull: {
              products: { _id: mongoose.Types.ObjectId(productItemId) }
            },
            totalPrice: total
          },
          { new: true, runValidators: true }
        );
      }
    }
    return order;
  } catch (error) {
    console.log("err", error);
  }
};

const getOrderOfUser = async id => {
  return await Order.find({ userId: mongoose.Types.ObjectId(id) }).populate(
    "products.productId"
  );
};

const UpdateStatusOrder = async (orderId, status) => {
  return await Order.findByIdAndUpdate(mongoose.Types.ObjectId(orderId), {
    status: status
  });
};

const create = async order => {
  const orderSave = new Order(order);
  return await orderSave.save();
};

module.exports = {
  findAll,
  validate,
  findOne,
  update,
  addProductItem,
  removeProductItem,
  create,
  getOrderOfUser,
  UpdateStatusOrder
};
