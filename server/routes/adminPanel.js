const express = require("express");
const db = require("../models");
const router = express.Router();

router.post("/adminpanel", async (req, res) => {
  const { name, description, price, image, category } = req.body;
  const addProduct = await db.katalog.create({
    name,
    description,
    price,
    image,
    category,
  });
  res.status(201).json(addProduct);
});
module.exports = router;
