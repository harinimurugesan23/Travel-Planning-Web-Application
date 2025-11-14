import React from "react";
import "../styles.css";
import vagamonImage from "../assets/vagamon.webp";
import { useNavigate } from "react-router-dom";

const Vagamon = () => {
  const navigate = useNavigate();

  return (
    <div
      className="vagamon-container"
      style={{ backgroundColor: "#f0fdf4", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Vagamon Image */}
      <img
        src={vagamonImage}
        alt="Vagamon Hills"
        className="vagamon-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="vagamon-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Vagamon is a picturesque hill station in Kerala, India, situated on the
          border between Kottayam and Idukki districts. It's known for its lush
          greenery, cool climate, and serene ambiance, offering a tranquil escape
          from city life. Vagamon is renowned for its breathtaking landscapes,
          including verdant hills, tea plantations, pine forests, and meadows.
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
        🌿 Escape into the serene hills of Vagamon – where nature whispers peace!
      </h3>

      {/* Budget & Duration */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#218838",
        }}
      >
        <p><strong>Tour Package Budget:</strong> ₹5000 per person</p>
        <p><strong>Duration:</strong> 4 Days / 3 Nights</p>
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#2c6e49",
        }}
      >
        <p><strong>Hotel to stay:</strong> Green Hill Resort</p>
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
          onClick={() => navigate("/schedule", { state: { place: "Vagamon" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Vagamon;
