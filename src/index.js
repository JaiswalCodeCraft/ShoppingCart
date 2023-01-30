const express = require("express");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const multer = require("multer");
const fs = require('fs')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any());

mongoose
  .connect("mongodb://localhost:27017/roughProject_5")
  .then(() => console.log("MongoDb is connected"))
  .catch((err) => console.log(err));

app.use("/", route);



app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
