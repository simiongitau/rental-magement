const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const userRoute = require("./routes/user");
const orderRoute = require("./routes/order");
const registerRoute = require("./routes/register");
const houseRoute = require("./routes/house");

app.use(cors());
app.use(express.json());
app.use(userRoute);
app.use(orderRoute);
app.use(houseRoute);
app.use(registerRoute);

mongoose
  .connect("mongodb://localhost:27017/HOUSEMANAGEMENT")
  .then(() => console.log("database connected"))
  .catch((err) => console.error(err));
// testing
app.get("/", (req, res) => {
  // res.status(200).json({'name':'simion gitau'})
  res.send("welcome");
});

app.listen(5000, () => console.log("server running"));
