import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Intro = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">TripIt</div> {/* Top-left logo */}
        <nav>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/help")}>Help</span>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-content">
        <h1>
          <span className="highlight">One travel app</span> <br />
          to plan your perfect trip!
        </h1>
        <p>Find destinations, book hotels, and manage your itinerary seamlessly.</p>
        <button className="get-started" onClick={() => navigate("/login")} aria-label="Get started for free">
  Get started. It's FREE
</button>


      </section>
    </div>
  );
};

export default Intro;
