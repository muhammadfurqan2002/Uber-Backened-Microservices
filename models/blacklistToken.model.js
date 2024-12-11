const mongoose = require("mongoose");

const blacklistedTokenSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true, // Ensures tokens are not duplicated in the blacklist
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // Set TTL of 24 hours (86400 seconds)
  },
});

const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistedTokenSchema);

module.exports = BlacklistedToken;
