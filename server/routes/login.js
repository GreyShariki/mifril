const express = require("express");
const db = require("../models");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const login = await db.users.findOne({ where: { email, password } });
  if (!login) {
    return res.status(401).json({ message: "Неверный пароль" });
  }
  return res.status(200).json({ message: "Пользователь найден" });
});

module.exports = router;
