const express = require("express");
const multer = require("multer");
const Payment = require("../models/paymentModel");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post("/payment", upload.single("screenshot"), async (req, res) => {
  try {
    const { email, place } = req.body;

    if (!req.file) {
      return res.status(400).json({ error: "No screenshot uploaded" });
    }

    const image = req.file.buffer.toString("base64");

    const newPayment = new Payment({ email, place, image });
    await newPayment.save();

    console.log("✅ Payment saved to DB");
    res.status(200).json({ message: "Payment uploaded successfully" });
  } catch (error) {
    console.error("❌ Error uploading payment:", error);
    res.status(500).json({ error: "Failed to upload payment" });
  }
});

module.exports = router;
