import React from "react";
import "../styles.css";
import varkalaImage from "../assets/varkala.webp";
import { useNavigate } from "react-router-dom";

const Varkala = () => {
  const navigate = useNavigate();

  return (
    <div
      className="varkala-container"
      style={{ backgroundColor: "#e0f8f1", minHeight: "100vh", padding: "2rem" }}
    >
      {/* Varkala Image */}
      <img
        src={varkalaImage}
        alt="Varkala Beach"
        className="varkala-image"
        style={{
          width: "100%",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      {/* Description */}
      <div
        className="varkala-description"
        style={{ marginTop: "1.5rem", color: "#000" }}
      >
        <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
          Varkala is a coastal city in the Indian state of Kerala, known for its
          unique cliff beach and geological features. It's a popular destination
          for both domestic and international tourists, offering a blend of
          natural beauty, cultural attractions, and spiritual sites. The city is
          located on the edge of a high cliff, offering stunning views of the
          Arabian Sea.
        </p>
      </div>

      {/* Catchy Text */}
      <h3
        style={{
          marginTop: "1.5rem",
          fontWeight: "bold",
          color: "#20c997",
        }}
      >
        🌊 Escape to the cliffs and waves of Varkala – your dream beach holiday
        awaits!
      </h3>

      {/* Budget & Duration */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.2rem",
          color: "#28a745",
        }}
      >
        <p><strong>Tour Package Budget:</strong> ₹3000 per person</p>
        <p><strong>Duration:</strong> 4 Days / 3 Nights</p>
      </div>

      {/* Hotel & Transport Info */}
      <div
        style={{
          marginTop: "1.5rem",
          fontSize: "1.1rem",
          color: "#1b9c85",
        }}
      >
        <p><strong>Hotel to stay:</strong> Meta Villas</p>
        <p><strong>Bus:</strong> Mango Cabs (1-15 members)</p>
      </div>

      {/* Schedule Plan Button */}
      <div style={{ marginTop: "2rem" }}>
        <button
          style={{
            padding: "0.7rem 1.5rem",
            backgroundColor: "#20c997",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
          onClick={() => navigate("/schedule", { state: { place: "Varkala" } })}
        >
          Schedule Plan
        </button>
      </div>
    </div>
  );
};

export default Varkala;
