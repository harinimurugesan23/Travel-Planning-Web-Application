const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  email: String,
  place: String,
  image: String, // base64 string
});

module.exports = mongoose.model("Payment", paymentSchema);
