const express = require("express");
const CusModel = require("../models/cusModel"); // Import the CusModel
const router = express.Router();

// POST route to save customized trip details
router.post("/customize", async (req, res) => {
  const { email, selectedPlace, schedule } = req.body;

  // Validate the received data
  if (!email || !selectedPlace || !schedule || schedule.length === 0) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Create a new customization entry in the database
    const newCustomization = new CusModel({
      email,
      selectedPlace,
      schedule,
    });

    // Save to the database
    await newCustomization.save();
    res.status(200).json({ message: "Customization saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error saving customization" });
  }
});

// GET route to fetch all customized trip details
router.get("/all-customizations", async (req, res) => {
  try {
    const plans = await CusModel.find().sort({ createdAt: -1 }); // fetch in descending order
    res.status(200).json(plans);
  } catch (error) {
    console.error("Error fetching customizations:", error);
    res.status(500).json({ message: "Failed to retrieve customizations" });
  }
});

module.exports = router;
