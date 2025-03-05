const express = require("express");
const router = express.Router();

router.get("/adminPanel", (req, res) => {
  res.render("update");
});
module.exports = router;
