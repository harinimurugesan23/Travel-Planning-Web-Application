const mongoose = require("mongoose");

const planSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  location: { type: String, required: true },
  budget: { type: Number, required: true },
  persons: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  destination: { type: String, required: true },
  total: { type: Number, required: true },
});

const Plan = mongoose.model("Plan", planSchema);

module.exports = Plan;
