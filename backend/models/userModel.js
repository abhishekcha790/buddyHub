/**
 * @summary
 * Mongoose schema for User collection:
 * - Supports authentication via email, phone, or Google
 * - Validates and stores user details like name, email, phone, and profile image
 * - Email and phone are optional but must be unique and correctly formatted if provided
 * - `authProvider` defines how the user signed up (required)
 * - Auto-generates `createdAt` timestamp for new users
 */

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,          // Must be unique across users
    sparse: true,          // Allows null/undefined while still enforcing uniqueness if value is present
    trim: true,            // Removes surrounding whitespaces
    lowercase: true,       // Stores email in lowercase
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Basic email format validation
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  },
  image: {
    type: String,
    trim: true,
  },
  phoneNumber: {
    type: String,
    unique: true,
    sparse: true,
    validate: {
      validator: function (v) {
        return /^\+91[0-9]{10}$/.test(v); // Validates Indian phone numbers starting with +91
      },
      message: (props) =>
        `${props.value} is not a valid Indian phone number!`,
    },
  },
  authProvider: {
    type: String,
    enum: ["email", "phone", "google"], // Accepted methods of signup/login
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set when document is created
  },
});

// Creating a model from the schema and naming the collection 'social-logins'
const UserModel = mongoose.model("social-logins", userSchema);

module.exports = UserModel;
