const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

// MONGODB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to the database"))
  .catch((e) => console.log(e));

app.use("/", (req, res) => {
  res.send("hey this is main");
});

app.listen("8000", () => {
  console.log("Server is running.");
});
