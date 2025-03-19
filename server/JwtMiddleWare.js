const jwt = require("jsonwebtoken");
const jwtMiddleware = (req, res, next) => {
  const token = req.cookies.token;
  try {
    req.user = jwt.verify(token, "verySecret");
    next();
  } catch (error) {
    res.clearCookie("token");
    res.status(401).send("unautorised");
  }
};
module.exports = jwtMiddleware;
