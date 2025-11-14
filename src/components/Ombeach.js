import React from "react";
import "../styles.css";
import ombeachImage from "../assets/ombeach.jpg"; // make sure this image exists
import { useNavigate } from "react-router-dom";

const Ombeach = () => {
  const navigate = useNavigate();

  return (
    <div
      className="ombeach-container"
      style={{ backgroundColor: "#f0fdf4", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Om Beach Image */}
      <img
        src={ombeachImage}
        alt="Om Beach"
        className="ombeach-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="ombeach-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Om Beach is a scenic and tranquil beach located in Gokarna, Karnataka.
          It's named after its natural 'Om' shape and is known for its golden sands,
          serene waters, and spiritual ambiance. Perfect for both relaxation and water activities.
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
        🌊 Let the waves of Om Beach wash your worries away!
      </h3>

      {/* Budget */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#218838",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹6000 per person
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
        <p><strong>Hotel to stay:</strong> Om Beach Resort</p>
        <p><strong>Bus:</strong> Gokarna Travels (1-15 members)</p>
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
          onClick={() => navigate("/schedule", { state: { place: "Om Beach" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Ombeach;
