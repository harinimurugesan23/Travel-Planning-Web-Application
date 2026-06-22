import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bgImage from "../assets/wow.jpg";

const Customize = () => {
  const [scheduleList, setScheduleList] = useState([{ date: "", time: "", desc: "" }]);
  const [email, setEmail] = useState("");
  const [selectedPlace, setSelectedPlace] = useState("");
  const navigate = useNavigate();

  const handleChange = (index, field, value) => {
    const updatedSchedule = [...scheduleList];
    updatedSchedule[index][field] = value;
    setScheduleList(updatedSchedule);
  };

  const handleAdd = () => {
    setScheduleList([...scheduleList, { date: "", time: "", desc: "" }]);
  };

  const handleSave = async () => {
    try {
      const response = await axios.post("https://travel-backend-ceam.onrender.com/api/customize", {
        email,
        selectedPlace,
        schedule: scheduleList,
      });
      console.log(response.data);
      alert("Customization saved successfully!");
    } catch (error) {
      console.error("Error saving customization:", error);
      alert("There was an error saving your customization.");
    }
  };

  const handleContinueToPayment = () => {
    navigate("/payment");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
      }}
    >
      <h3 style={{ marginTop: "2rem", color: "#007BFF" }}>
        Customize Your Own Trip Plan
      </h3>

      {/* Styled Email Input */}
      <div style={{ 
  marginBottom: "1rem", 
  display: "flex", 
  justifyContent: "center" 
}}>
  <input
    type="email"
    placeholder="📧 Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    style={{
      padding: "0.75rem 1rem",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      width: "60%",
      fontSize: "1rem",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}
  />
</div>

      {/* Styled Select Dropdown */}
      <div style={{ 
  marginBottom: "1.5rem", 
  display: "flex", 
  justifyContent: "center" 
}}>
  <select
    value={selectedPlace}
    onChange={(e) => setSelectedPlace(e.target.value)}
    style={{
      padding: "0.75rem 1rem",
      borderRadius: "8px",
      border: "1px solid #ced4da",
      width: "60%",
      fontSize: "1rem",
      backgroundColor: "#f8f9fa",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    }}
  >
          <option value="" disabled>
            -- Choose a place --
          </option>
          <option value="Papikondalu">Papikondalu</option>
          <option value="Lambasingi">Lambasingi</option>
          <option value="Munnar">Munnar</option>
          <option value="Vagamon">Vagamon</option>
          <option value="Chandragiri">Chandragiri</option>
          <option value="Chikmanglore">Chikmanglore</option>
          <option value="Ombeach">Ombeach</option>
          <option value="Varkala">Varkala</option>
        </select>
      </div>

      {/* Schedule Inputs */}
      {scheduleList.map((item, index) => (
        <div key={index} className="input-section">
          <input
            type="date"
            value={item.date}
            onChange={(e) => handleChange(index, "date", e.target.value)}
          />
          <input
            type="time"
            value={item.time}
            onChange={(e) => handleChange(index, "time", e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={item.desc}
            onChange={(e) => handleChange(index, "desc", e.target.value)}
          />
        </div>
      ))}

      <button
        onClick={handleAdd}
        style={{
          marginTop: "1rem",
          backgroundColor: "#198754",
          color: "white",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          border: "none",
        }}
      >
        ➕ Add Another
      </button>

      <br />

      <button
        onClick={handleSave}
        style={{
          marginTop: "1.5rem",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "0.6rem 1.2rem",
          borderRadius: "5px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        💾 Save Schedule
      </button>

      <br />

      <button
        onClick={handleContinueToPayment}
        style={{
          marginTop: "1.5rem",
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "0.6rem 1.2rem",
          borderRadius: "5px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Continue to Payment
      </button>
    </div>
  );
};

export default Customize;
