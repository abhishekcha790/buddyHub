const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["TextBook", "Electronics", "Bike", "Furniture", "Kitchen", "Other"],
    },

    // Common fields
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    photos: [{ type: String }], // array of image URLs
    location: { type: String, required: true },

    // Electronics & Bike specific
    brand: {
      type: String,
      required: function () {
        return this.category === "Electronics" || this.category === "Bike";
      },
    },
    yearOfPurchase: {
      type: Number,
      required: function () {
        return this.category === "Electronics" || this.category === "Bike";
      },
    },

    // Bike specific
    kmDriven: {
      type: Number,
      required: function () {
        return this.category === "Bike";
      },
    },

    // Metadata
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const CategoriesModel = mongoose.model("sub-categories", categoriesSchema);

module.exports = CategoriesModel;
