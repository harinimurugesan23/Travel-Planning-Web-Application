import React from "react";
import "../styles.css";
import chandragiriImage from "../assets/chandragiri.jpg"; // Make sure this image exists
import { useNavigate } from "react-router-dom";

const Chandragiri = () => {
  const navigate = useNavigate();

  return (
    <div
      className="chandragiri-container"
      style={{ backgroundColor: "#f5f3ff", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Chandragiri Image */}
      <img
        src={chandragiriImage}
        alt="Chandragiri Fort"
        className="chandragiri-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="chandragiri-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Chandragiri Fort in Andhra Pradesh stands as a testament to the architectural grandeur of the Vijayanagara Empire.
          Surrounded by lush hills and historical charm, this destination is perfect for history buffs and cultural explorers.
        </p>
      </div>

      {/* Catchy Text */}
      <h3
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          color: "#6b21a8",
        }}
      >
        🏰 Step back in time and explore the legacy of Chandragiri!
      </h3>

      {/* Budget */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#7c3aed",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹6500 per person
      </div>

      {/* Duration */}
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.1rem",
          color: "#4c1d95",
        }}
      >
        <strong>Trip Duration:</strong> 4 Days / 3 Nights
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#4c1d95",
        }}
      >
        <p><strong>Hotel to stay:</strong> Heritage Residency, Tirupati</p>
        <p><strong>Bus:</strong> APSRTC Deluxe (group-friendly)</p>
      </div>

      {/* Schedule Plan Button */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#6b21a8",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/schedule", { state: { place: "Chandragiri" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Chandragiri;
