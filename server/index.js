const express = require("express");
const cors = require("cors");
const db = require("./models");
const app = express();

app.use(cors());
app.use(express.json());

const registerRouter = require("./routes/register");
app.use("/api", registerRouter);

db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("Server running on port 3001");
  });
});
