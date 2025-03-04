const express = require("express");
const router = express.Router();

router.get("/aaa", (req, res) => {
  res.status(200).json({ massage: "Пошёл нахуй, Артемий" });
});

module.exports = router;
