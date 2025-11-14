// planRoute.js
const express = require("express");
const Plan = require("../models/Plan");
const router = express.Router();

// POST route to save a new plan
router.post("/plans", async (req, res) => {
  try {
    const newPlan = new Plan(req.body);
    await newPlan.save();
    res.status(201).json(newPlan);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create the plan" });
  }
});

// GET route to fetch all plans
router.get("/plans", async (req, res) => {
  try {
    const plans = await Plan.find(); // Fetch all plans from the database
    res.status(200).json(plans); // Send the plans as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

module.exports = router;
