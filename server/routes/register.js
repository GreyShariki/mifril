const express = require("express");
const router = express.Router();
const db = require("../models");
const { where } = require("sequelize");

router.post("/register", async (req, res) => {
  const { lname, fname, password, email, country } = req.body;
  const existingUser = await db.users.findOne({ where: { email } });
  if (existingUser) {
    res
      .status(400)
      .json({ massage: "Пользователь с таким email уже существует" });
  }
  const newUser = await db.users.create({
    lname,
    fname,
    password,
    email,
    country,
  });
  res.status(201).json(newUser);
});
module.exports = router;
