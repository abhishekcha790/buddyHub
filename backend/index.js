const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const port = 3000;

const db = process.env.DB_URL;

mongoose.connect(db);
const conn = mongoose.connection;

conn.once("open", () => {
  console.log("successfully database connected");
});

conn.on("error", () => {
  console.log("error connecting to database");
  process.exit();
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
