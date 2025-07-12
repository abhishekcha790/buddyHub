const express = require("express");
const bodyParser = require('body-parser');
const cors = require('cors');
require("dotenv").config();
require('./models/dbConnection.js');
const authRoutes = require("./routes/authRouter");

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT || 3001;
require('./models/dbConnection.js');

const authRouter = require('./routes/authRouter.js');
const cors = require('cors')

app.use(cors());
app.use(express.json());
=======


app.use(cors({
  origin: "http://localhost:3001", 
  credentials: true
}));

app.use(bodyParser.json());
const PORT = process.env.PORT || 3002;


app.use("/api/auth", authRoutes);
>>>>>>> signup

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use('/auth',authRouter)

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
