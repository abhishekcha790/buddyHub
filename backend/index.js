const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
require('./models/dbConnection.js');

const authRouter = require('./routes/authRouter.js');

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/auth',authRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
