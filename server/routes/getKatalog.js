const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const data = await db.katalog.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log("Ошибка: ", error);
    res.status(500).send("Произошла ошибка при выгрузке данных");
  }
});

module.exports = router;
