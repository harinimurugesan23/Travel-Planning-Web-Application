// routes/userRoute.js
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");
const router = express.Router();

// Sign-up Route
router.post("/signup", async (req, res) => {
  const { name, email, username, password, phone, location } = req.body;

  try {
    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists. Please log in." });
    }

    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create a new user
    const newUser = new User({
      name,
      email,
      username,
      password: hashedPassword,
      phone,
      location,
    });

    // Save the new user to the database
    await newUser.save();
    res.status(201).json({ message: "User signed up successfully." });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "There was an issue with the sign-up. Please try again." });
  }
});

// Login Route
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if user exists by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Compare password with hashed password in the database
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    // Return success response with user info
    res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
});

module.exports = router;
