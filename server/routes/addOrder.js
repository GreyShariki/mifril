const express = require("express");
const db = require("../models");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const token = req.cookies.token;
  req.body.map(async (item) => {
    const { name, description, price, image, category } = item;
    const decoded = jwt.verify(token, "verySecret");
    const user_id = decoded.login.id;
    const addProduct = await db.shop.create({
      name,
      description,
      price,
      image,
      category,
      user_id,
    });
  });
  res.status(201).json({ message: "success" });
});
module.exports = router;
