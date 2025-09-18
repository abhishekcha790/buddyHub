const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
require('./models/dbConnection.js');
const authRoutes = require("./routes/authRouter");
const categoriesRoutes = require("./routes/categoriesRouter");

const app = express();


app.use(cors({
  origin: "http://localhost:3000", 
  credentials: true
}));

app.use(bodyParser.json());
const PORT = process.env.PORT 


app.use("/api/auth", authRoutes);
app.use("/api/categories", categoriesRoutes);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
