import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 Import Link
import "../styles.css";
import bgImage from "../assets/bg4.jpg"; 

const andhraPackages = {
  4000: [
    { name: "Chikmanglore", image: require("../assets/chikmanglore.webp"), link: "/chikmanglore" },
  ],
  6000: [
    { name: "Om Beach", image: require("../assets/ombeach.jpg") , link: "/ombeach" },
  ],
};

const Andhra = () => {
  const [budget, setBudget] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleCheck = () => {
    const numBudget = parseInt(budget);
    if (numBudget < 4000) {
      setSelectedPackage("none");
    } else if (numBudget >= 4000 && numBudget < 6000) {
      setSelectedPackage(4000);
    } else {
      setSelectedPackage(6000);
    }
  };

  return (
    <div
      className="andhra-container"
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
        <h2>Enter your budget for Andhra [per person]</h2>
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
          andhraPackages[selectedPackage].map((place, idx) => {
            const cardContent = (
              <div className="card andhra-card" key={idx}>
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

export default Andhra;
