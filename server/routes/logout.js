const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.clearCookie("token", {
      path: "/",
      httpOnly: true,
    });

    res.status(200).send("Кука успешно удалена");
  } catch (error) {
    console.log("Ошибка: ", error);
    res.status(500).send("Произошла ошибка при удалении куки");
  }
});

module.exports = router;
