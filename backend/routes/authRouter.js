const { googleLogin } = require("../controllers/authControllers");

const router = require("express").Router();


router.get("/test", (req, res) => {
  res.send("test pass");
});
module.exports = router;


router.post('/google',googleLogin)