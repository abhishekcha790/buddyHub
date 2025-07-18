const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
require('./models/dbConnection.js');
const authRoutes = require("./routes/authRouter");

const app = express();


app.use(cors({
  origin: "http://localhost:3001", 
  credentials: true
}));

app.use(bodyParser.json());
const PORT = process.env.PORT 


app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
