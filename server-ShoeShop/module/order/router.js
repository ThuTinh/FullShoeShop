const express = require("express");
const mongoose = require("mongoose");
const {
  findAll,
  validate,
  findOne,
  update,
  addProductItem,
  removeProductItem,
  create
} = require("./handler");
const router = new express.Router();

router.get("/", async (req, res, next) => {
  const products = await findAll();
  res.status(200).json(products);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id ? req.params.id : 0;
  const order = findOne(id);
  res.status(200).json(order);
});

router.put("/:id", async (req, res, next) => {
  validate(req.body);
  const id = req.params.id ? req.params.id : 0;
  const order = update(id, req.body);
  res.status(200).json(order);
});

router.post("/", async (req, res, next) => {
  validate(req.body);
  const order = await create(req.body);
  res.status(200).json(order);
});

router.post("/product-item/:id", async (req, res, next) => {
  validate(req.body);
  const id = req.params.id ? req.params.id : 0;
  const productItem = addProductItem(id, req.body);
  res.status(200).json(productItem);
});

router.put("/product-item/:id", async (req, res, next) => {
  validate(req.body);
  const id = req.params.id ? req.params.id : 0;
  const productItem = removeProductItem(id, req.body);
  res.status(200).json(productItem);
});

module.exports = router;
