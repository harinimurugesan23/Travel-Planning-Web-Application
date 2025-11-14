import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const About = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="about-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">TripIt</div> {/* Top-left logo */}
        <nav>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/help")}>Help</span>
        </nav>
      </header>

      {/* About Content */}
      <section className="about-content">
        <h2>About TripIt</h2>
        <p>
          TripIt is your ultimate travel planning companion, allowing you to organize
          your trips effortlessly. Explore new destinations, book accommodations, and
          create a well-structured itinerary.
        </p>
        <p>
          Whether you are an adventurer seeking unique experiences or a business traveler
          looking for a hassle-free journey, TripIt ensures your trips are planned
          seamlessly. With smart recommendations and a user-friendly interface, planning
          has never been easier.
        </p>

        {/* Key Features */}
        <div className="features-section">
          <div className="feature-item">
            <h4>🌍 Explore Destinations</h4>
            <p>Discover the best places to visit with curated travel guides and recommendations.</p>
          </div>

          <div className="feature-item">
            <h4>🏨 Hassle-Free Bookings</h4>
            <p>Find and book accommodations, flights, and activities all in one place.</p>
          </div>

          <div className="feature-item">
            <h4>🗂️ Smart Itinerary Management</h4>
            <p>Organize your entire trip with our easy-to-use itinerary planner.</p>
          </div>
        </div>
		
      </section>
    </div>
  );
};

export default About;
