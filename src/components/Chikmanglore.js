import React from "react";
import "../styles.css";
import chikmangloreImage from "../assets/chikmanglore.webp"; // make sure this path and file exist
import { useNavigate } from "react-router-dom";

const Chikmanglore = () => {
  const navigate = useNavigate();

  return (
    <div
      className="chikmanglore-container"
      style={{ backgroundColor: "#f0fdf4", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Chikmanglore Image */}
      <img
        src={chikmangloreImage}
        alt="Chikmanglore Hills"
        className="chikmanglore-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="chikmanglore-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Chikmanglore, located in Karnataka, is a charming hill station known for its coffee estates,
          serene environment, and picturesque views. Nestled in the Western Ghats, it offers cool weather,
          dense forests, and peaceful landscapes perfect for a relaxing getaway.
        </p>
      </div>

      {/* Catchy Text */}
      <h3
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          color: "#28a745",
        }}
      >
        ☕ Rejuvenate among the coffee-scented hills of Chikmanglore!
      </h3>

      {/* Budget */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#218838",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹4500 per person
      </div>

      {/* Duration */}
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.1rem",
          color: "#2c6e49",
        }}
      >
        <strong>Trip Duration:</strong> 4 Days / 3 Nights
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#2c6e49",
        }}
      >
        <p><strong>Hotel to stay:</strong> Coffee Bloom Resort</p>
        <p><strong>Bus:</strong> Karnataka Travels (1-15 members)</p>
      </div>

      {/* Schedule Plan Button */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/schedule", { state: { place: "Chikmanglore" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Chikmanglore;
