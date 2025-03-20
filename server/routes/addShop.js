const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/addShop", async (req, res) => {
  const { user_id, product_id, quantity } = req.body;
  const existingOrder = await db.order.findOne({
    where: {
      user_id: user_id,
      product_id: product_id,
    },
  });
  if (existingOrder) {
    existingOrder.quantity += quantity;
    await existingOrder.save();
    res.status(200).json(existingOrder);
  } else {
    const newOrder = await db.order.create({
      user_id,
      product_id,
      quantity,
    });
    res.status(201).json(newOrder);
  }
});
module.exports = router;
