import React from "react";
import "../styles.css";
import munnarImage from "../assets/munnar.webp";
import { useNavigate } from "react-router-dom";

const Munnar = () => {
  const navigate = useNavigate();

  return (
    <div
      className="munnar-container"
      style={{ backgroundColor: "#f0fdf4", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Munnar Image */}
      <img
        src={munnarImage}
        alt="Munnar Hills"
        className="munnar-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="munnar-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Munnar is a picturesque hill station in Kerala, India, renowned for
          its sprawling tea plantations, misty valleys, and vibrant biodiversity.
          Located at 1,600 meters above sea level, it was once the summer resort
          of the British Raj. Munnar is also known for the rare Neelakurinji flower,
          which blooms once every 12 years, and the highest peak in South India, Anamudi.
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
        🌿 Discover the misty heights of Munnar – a paradise in the hills!
      </h3>

      {/* Budget */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#218838",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹7000 per person
      </div>

      {/* Duration */}
      <div
        style={{
          marginTop: "0.5rem",
          fontSize: "1.1rem",
          color: "#155724",
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
        <p><strong>Hotel to stay:</strong> Munnar Tea Country Resort</p>
        <p><strong>Bus:</strong> Kerala Riders (1-15 members)</p>
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
          onClick={() => navigate("/schedule", { state: { place: "Munnar" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Munnar;
