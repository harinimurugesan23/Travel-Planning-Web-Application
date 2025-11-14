require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const planRoute = require("./routes/planRoute");
const userRoute = require("./routes/userRoute"); // Import user route
const cusRoute = require("./routes/cusRoute"); // Import the new customization route
const paymentRoute = require("./routes/paymentRoute"); 

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/api", planRoute);
app.use("/api", userRoute); 
app.use("/api", cusRoute);
app.use("/api", paymentRoute);                 // ✅
 

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
