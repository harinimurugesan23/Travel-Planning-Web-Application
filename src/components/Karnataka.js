import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import bgImage from "../assets/bg4.jpg"; // Background image

const karnatakaPackages = {
  3500: [
    {
      name: "Papikondalu",
      image: require("../assets/papikondalu.jpg"),
      link: "/papikondalu",
    },
  ],
  5500: [
    {
      name: "Lambasingi",
      image: require("../assets/lambasingi.webp"),
      link: "/lambasingi",
    },
  ],
  6500: [
    {
      name: "Chandragiri",
      image: require("../assets/chandragiri.jpg"),
      link: "/chandragiri",
    },
  ],
};

const Karnataka = () => {
  const [budget, setBudget] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleCheck = () => {
    const numBudget = parseInt(budget);

    if (numBudget < 3000 || numBudget > 10000) {
      setSelectedPackage("none");
    } else if (numBudget >= 3000 && numBudget <= 5000) {
      setSelectedPackage(3500); // Papikondalu
    } else if (numBudget > 5000 && numBudget <= 6000) {
      setSelectedPackage(5500); // Lambasingi
    } else if (numBudget > 6000 && numBudget <= 10000) {
      setSelectedPackage(6500); // Chandragiri
    }
  };

  return (
    <div
      className="karnataka-container"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "2rem",
        color: "#fff",
      }}
    >
      <div className="budget-input">
        <h2>Enter your budget for Karnataka [per person]</h2>
        <input
          type="number"
          placeholder="Enter budget..."
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />
        <br />
        <button onClick={handleCheck}>Check Packages</button>
      </div>

      <div className="packages-section">
        {selectedPackage === "none" ? (
          <p className="no-package-text">No tourist place available for this budget.</p>
        ) : (
          selectedPackage &&
          karnatakaPackages[selectedPackage].map((place, idx) => {
            const cardContent = (
              <div className="card karnataka-card" key={idx}>
                <img src={place.image} alt={place.name} />
                <p>{place.name}</p>
                <p>Budget: ₹{selectedPackage}</p>
              </div>
            );
            return place.link ? (
              <Link to={place.link} key={idx} style={{ textDecoration: "none" }}>
                {cardContent}
              </Link>
            ) : (
              cardContent
            );
          })
        )}
      </div>
    </div>
  );
};

export default Karnataka;
