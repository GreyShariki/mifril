const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();
app.set("view engine", "ejs");
app.set("views", "./pages");
app.use(cors());
app.use(express.json());

const registerRouter = require("./routes/register");
const loginRouter = require("./routes/login");
const postRouter = require("./routes/Posts");
const adminPanel = require("./routes/adminPanel");

app.use("/api", registerRouter);
app.use("/api", loginRouter);
app.use("/api", postRouter);
app.use("/api", adminPanel);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
