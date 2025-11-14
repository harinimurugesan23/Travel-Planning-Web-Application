import React from "react";
import "../styles.css";
import lambasingiImage from "../assets/lambasingi.webp";
import { useNavigate } from "react-router-dom";

const Lambasingi = () => {
  const navigate = useNavigate();

  return (
    <div
      className="lambasingi-container"
      style={{ backgroundColor: "#f0f8ff", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Lambasingi Image */}
      <img
        src={lambasingiImage}
        alt="Lambasingi Hills"
        className="lambasingi-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="lambasingi-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Lambasingi, often called the "Kashmir of Andhra Pradesh", is a peaceful village nestled in the Eastern Ghats.
          Known for its chilly weather, misty mornings, and lush green surroundings, it is the perfect destination for nature lovers.
        </p>
      </div>

      {/* Catchy Text */}
      <h3
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          color: "#007BFF",
        }}
      >
        ❄️ Chill out in the misty haven of Lambasingi!
      </h3>

      {/* Budget and Duration */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#0056b3",
        }}
      >
        <strong>Tour Package Budget:</strong> ₹5500 per person
        <br />
        <strong>Duration:</strong> 4 Days / 3 Nights
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#004085",
        }}
      >
        <p><strong>Hotel to stay:</strong> Chill Breeze Resort</p>
        <p><strong>Bus:</strong> APSRTC (1-15 members)</p>
      </div>

      {/* Schedule Plan Button */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/schedule", { state: { place: "Lambasingi" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Lambasingi;
