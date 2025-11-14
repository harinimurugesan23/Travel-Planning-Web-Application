import React from "react";
import "../styles.css";
import papikondaluImage from "../assets/papikondalu.jpg"; 
import { useNavigate } from "react-router-dom";

const Papikondalu = () => {
  const navigate = useNavigate();

  return (
    <div
      className="papikondalu-container"
      style={{ backgroundColor: "#fff8f0", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Papikondalu Image */}
      <img
        src={papikondaluImage}
        alt="Papikondalu Hills"
        className="papikondalu-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="papikondalu-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Papikondalu, located along the banks of the Godavari River in Andhra Pradesh, is famous for its breathtaking
          river cruises, scenic hills, and tribal culture. It's a tranquil retreat away from city life, surrounded by
          lush greenery and peaceful backwaters.
        </p>
      </div>

      {/* Catchy Text */}
      <h3
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          color: "#e69500",
        }}
      >
        🚤 Cruise into serenity with the scenic beauty of Papikondalu!
      </h3>

      {/* Budget */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#d97706",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹3500 per person
      </div>

      {/* Duration */}
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.1rem",
          color: "#92400e",
        }}
      >
        <strong>Trip Duration:</strong> 4 Days / 3 Nights
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#92400e",
        }}
      >
        <p><strong>Hotel to stay:</strong> River View Cottage</p>
        <p><strong>Boat & Bus:</strong> Godavari River Cruise + APSRTC</p>
      </div>

      {/* Schedule Plan Button */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#e69500",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/schedule", { state: { place: "Papikondalu" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Papikondalu;
