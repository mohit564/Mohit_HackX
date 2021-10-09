const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// IMPORT routes
const channelsRoute = require("./routes/channels");

const app = express();
app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use("/api/v1/channels", channelsRoute);

app.get("/", (req, res) => {
  res.send("Welcome to Mohit HackX API");
});

// CONNECT to DB
mongoose.connect(process.env.DB_CONNECTION, (err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server started on Port ${app.get("port")}`);
});

module.exports = app;
