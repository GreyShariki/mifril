const express = require("express");
const jwt = require("jsonwebtoken");
const db = require("../models");
const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const login = await db.users.findOne({ where: { email, password } });
  if (!login) {
    return res.status(401).json({ message: "Неверный пароль" });
  }

  const token = jwt.sign({ login }, "verySecret", { expiresIn: "15m" });
  res.cookie("token", token, {
    secure: false,
    sameSite: "lax",
    maxAge: 15 * 60 * 1000,
    domain: "localhost",
  });
  return res.status(200).json({ message: login });
});

module.exports = router;
