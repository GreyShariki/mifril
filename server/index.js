const express = require("express");
const cors = require("cors");
const db = require("./models");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
app.set("view engine", "ejs");
app.set("views", "./pages");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
const addShop = require("./routes/addShop.js");
const katalogRouter = require("./routes/getKatalog");
const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const adminPanel = require("./routes/adminPanel");
const logout = require("./routes/logout.js");
const profileData = require("./routes/profileData.js");
const cartRouter = require("./routes/userCart.js");
const ordersRouter = require("./routes/getOrders");
const getOrdersRouter = require("./routes/addOrder.js");
const jwtMiddleware = require("./JwtMiddleWare.js");

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api/katalog", katalogRouter);
app.use("/api/addOrder", jwtMiddleware, getOrdersRouter);
app.use("/api/getOrders", jwtMiddleware, ordersRouter);
app.use("/api", jwtMiddleware, addShop);
app.use("/api", jwtMiddleware, cartRouter);
app.use("/api", jwtMiddleware, adminPanel);
app.use("/api/logout", jwtMiddleware, logout);
app.use("/api/getData", jwtMiddleware, profileData);

db.sequelize.sync({}).then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
