const mongoose = require("mongoose");

const CusSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    selectedPlace: {
      type: String,
      required: true,
    },
    schedule: [
      {
        date: {
          type: String,
          required: true,
        },
        time: {
          type: String,
          required: true,
        },
        desc: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

const CusModel = mongoose.model("Customize", CusSchema);
module.exports = CusModel;
