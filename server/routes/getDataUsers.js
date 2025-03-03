const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/getData", (req, res) => {
  const users = res.send(db.users.findAll());

  res.status(200).json(users);
});
module.exports = router;
