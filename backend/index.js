const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

DB_URL =
  "mongodb+srv://abhisheksinghc84:OBVfQch6jNCBvTKZ@cluster0.jkkpgsi.mongodb.net/";

mongoose.connect(DB_URL);
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
