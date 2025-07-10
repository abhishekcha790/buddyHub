const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    sparse: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
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
        return /^\+91[0-9]{10}$/.test(v);
      },
      message: (props) =>
        `${props.value} is not a valid Indian phone number!`,
    },
  },
  authProvider: {
    type: String,
    enum: ["email", "phone", "google"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const UserModel = mongoose.model("social-logins", userSchema);
module.exports = UserModel;
