const express = require("express");
const db = require("../models");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "verySecret");
    const user_id = decoded.login.id;
    const data = await db.shop.findAll({ where: { user_id } });
    res.status(200).json(data);
  } catch (error) {
    console.log("Ошибка: ", error);
    res.status(500).send("Произошла ошибка при выгрузке данных");
  }
});

module.exports = router;
