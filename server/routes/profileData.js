const express = require("express");
const jwt = require("jsonwebtoken");
const { jwtDecode } = require("jwt-decode");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, "verySecret");
    res.status(200).json(decoded);
  } catch (error) {
    console.log("Ошибка: ", error);
    res.status(500).send("Произошла ошибка при выгрузке данных");
  }
});

module.exports = router;
