import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // ✅ useLocation for getting passed state
import "../styles.css";

const Schedule = () => {
  const navigate = useNavigate();
  const location = useLocation(); // ✅ get state from location
  const destination = location.state?.place || "Varkala"; // fallback if nothing is passed

  const packageRates = {
    Varkala: 3000,
    Vagamon: 5000,
    Munnar: 7000,
    Chikmanglore: 4000,
    "Om Beach": 6000, // ✅ Fixed key to match place passed from Ombeach.js
    "Chandragiri": 6500,
    "Papikondalu": 3500,
    "Lambasingi": 5500,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    budget: packageRates[destination] || 0,
    persons: 1,
    startDate: "",
    endDate: "",
  });

  const [total, setTotal] = useState(packageRates[destination] || 0);

  useEffect(() => {
    const budget = packageRates[destination] || 0;
    const personCount = parseInt(formData.persons || 1);
    setFormData((prev) => ({ ...prev, budget }));
    setTotal(budget * personCount);
  }, [destination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedForm = {
      ...formData,
      [name]: value,
    };

    const personCount = parseInt(updatedForm.persons || 1);
    const totalAmount = updatedForm.budget * personCount;

    setFormData(updatedForm);
    setTotal(totalAmount);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const planData = {
      ...formData,
      destination,
      total,
    };

    try {
      const res = await fetch("https://travel-backend-ceam.onrender.com/api/plans", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(planData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Plan Scheduled Successfully!");
        navigate("/plan", { state: { email: formData.email, ...planData } }); // Passing the email to the next page
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error("Error submitting plan:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="schedule-container" style={{ padding: "2rem", backgroundColor: "#f5fff9" }}>
      <h2 style={{ color: "#198754" }}>🗓️ Schedule Your Trip to {destination}</h2>

      <form onSubmit={handleSubmit} className="schedule-form" style={{ marginTop: "1.5rem" }}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Current Location" value={formData.location} onChange={handleChange} required />
        <input type="number" name="persons" placeholder="Number of Persons" value={formData.persons} onChange={handleChange} min="1" required />

        <input type="text" name="budget" value={`₹${formData.budget}`} readOnly />
        <input type="text" value={`Total Amount: ₹${total}`} readOnly style={{ fontWeight: "bold", color: "#28a745" }} />

        <label>Start Date:</label>
        <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        <label>End Date:</label>
        <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />

        <button
          type="submit"
          style={{
            marginTop: "1rem",
            backgroundColor: "#20c997",
            color: "white",
            padding: "0.5rem 1rem",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Schedule;
