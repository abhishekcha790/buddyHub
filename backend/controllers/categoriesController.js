const CategoriesModel = require("../models/categoriesModel");

// @desc    Create new Ad
// @route   POST /api/categories
exports.createAd = async (req, res) => {
  try {
    const {
      category,
      title,
      description,
      price,
      photos,
      location,
      brand,
      yearOfPurchase,
      kmDriven,
    } = req.body;

    const newAd = new CategoriesModel({
      category,
      title,
      description,
      price,
      photos,
      location,
      brand,
      yearOfPurchase,
      kmDriven,
    });

    await newAd.save();

    res.status(201).json({
      success: true,
      message: "Ad posted successfully!",
      data: newAd,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to post ad",
      error: error.message,
    });
  }
};

// @desc    Get all Ads
// @route   GET /api/categories
exports.getAllAds = async (req, res) => {
  try {
    const ads = await CategoriesModel.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, count: ads.length, data: ads });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch ads",
      error: error.message,
    });
  }
};

// @desc    Get ads by Category
// @route   GET /api/categories/:category
exports.getAdsByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const ads = await CategoriesModel.find({ category }).sort({ createdAt: -1 });

    if (ads.length === 0) {
      return res.status(404).json({
        success: false,
        message: `No ads found for category: ${category}`,
      });
    }

    res.status(200).json({ success: true, count: ads.length, data: ads });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch ads by category",
      error: error.message,
    });
  }
};

// @desc    Get single Ad by ID
// @route   GET /api/categories/ad/:id
exports.getAdById = async (req, res) => {
  try {
    const ad = await CategoriesModel.findById(req.params.id);

    if (!ad) {
      return res.status(404).json({
        success: false,
        message: "Ad not found",
      });
    }

    res.status(200).json({ success: true, data: ad });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch ad",
      error: error.message,
    });
  }
};
