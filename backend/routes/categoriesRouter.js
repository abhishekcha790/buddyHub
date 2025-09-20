const express = require("express");
const router = express.Router();
const {
  createAd,
  getAllAds,
  getAdsByCategory,
  getAdById
} = require("../controllers/categoriesController");

// Routes
router.post("/", createAd);
router.get("/", getAllAds);
router.get("/:category", getAdsByCategory);
router.get("/ad/:id", getAdById);

module.exports = router;  
