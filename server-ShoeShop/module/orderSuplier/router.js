const express = require("express");
const {
  create,
  remove,
  update,
  filter,
  validate,
  findOne
} = require("./handler");
const { makeResponse } = require("../common");
const router = new express.Router();

router.get("/", async (req, res, next) => {
  console.log("filter: " , req.query.filter);
  const orders = await filter(req.query.filter);
  res.status(200).json(makeResponse(orders));
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id ? req.params.id : 0;
  const order = await findOne(id);
  res.status(200).json(makeResponse(order));
});

router.post("/", async (req, res, next) => {
  validate(req.body);
  const order = await create(req.body);
  res.status(200).json(makeResponse(order));
});

router.put("/", async (req, res, next) => {
  validate(req.body);
  const orderUpdate = await update(req.body);
  res.status(200).json(makeResponse(orderUpdate));
});

router.delete("/", async (req, res, next) => {
  const orderDelete = await remove(req.body.id);
  res.status(200).json(makeResponse(orderDelete));
});

module.exports = router;
