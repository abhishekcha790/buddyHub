const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;
require('./models/dbConnection.js');

const authRouter = require('./routes/authRouter.js');
const cors = require('cors')

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/auth',authRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
