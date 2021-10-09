const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = express();
app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Welcome to Mohit HackX API");
});

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server started on Port ${app.get("port")}`);
});

module.exports = app;
