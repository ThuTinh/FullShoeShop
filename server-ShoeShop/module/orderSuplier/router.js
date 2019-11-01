const express = require("express");
const {
  create,
  remove,
  update,
  findAll,
  validate,
  findOne
} = require("./handler");
const router = new express.Router();

router.get("/", async (req, res, next) => {
  const orders = await findAll();
  res.status(200).json(orders);
});

router.get("/:id", async (req, res, next) => {
  const id = req.params.id ? req.params.id : 0;
  const order = await findOne(id);
  res.status(200).json(order);
});

router.post("/", async (req, res, next) => {
  validate(req.body);
  const order = await create(req.body);
  res.status(200).json(order);
});

router.put("/", async (req, res, next) => {
  validate(req.body);
  const orderUpdate = await update(req.body);
  res.status(200).json(orderUpdate);
});

router.delete("/", async (req, res, next) => {
  const orderDelete = await remove(req.body.id);
  res.status(200).json(orderDelete);
});

module.exports = router;
