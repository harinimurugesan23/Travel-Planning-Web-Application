import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 Import Link
import "../styles.css";
import bgImage from "../assets/bg4.jpg"; 

const keralaPackages = {
  3000: [
    { name: "Varkala Beach", image: require("../assets/varkala.webp"), link: "/varkala" },
  ],
  5000: [
    { name: "Vagamon", image: require("../assets/vagamon.webp") , link: "/vagamon" },
  ],
  7000: [
    { name: "Munnar", image: require("../assets/munnar.webp") , link: "/munnar" },
  ],
};

const Kerala = () => {
  const [budget, setBudget] = useState("");
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleCheck = () => {
    const numBudget = parseInt(budget);
    if (numBudget < 3000) {
      setSelectedPackage("none");
    } else if (numBudget >= 3000 && numBudget < 5000) {
      setSelectedPackage(3000);
    } else if (numBudget >= 5000 && numBudget < 7000) {
      setSelectedPackage(5000);
    } else {
      setSelectedPackage(7000);
    }
  };

  return (
    <div
      className="kerala-container"
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
        <h2>Enter your budget for Kerala [per person]</h2>
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
          keralaPackages[selectedPackage].map((place, idx) => {
            const cardContent = (
              <div className="card kerala-card" key={idx}>
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

export default Kerala;
