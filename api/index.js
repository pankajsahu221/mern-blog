const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");

dotenv.config();
const PORT = process.env.PORT || 8000;

// to use bodyparser
app.use(express.json());
app.use(express.urlencoded());

// MONGODB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to the database"))
  .catch((e) => console.log(e));

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);

app.listen(PORT, () => {
  console.log("Server is running.");
});
