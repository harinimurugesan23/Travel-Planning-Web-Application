import React, { useState, useEffect } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import keralaImage from "../assets/kerala.jpg";
import karnatakaImage from "../assets/karnataka.jpg";
import andhraImage from "../assets/andhra.webp";
import { FaLightbulb, FaCogs, FaChartPie, FaCloud, FaUsers, FaMapMarkedAlt, FaSuitcaseRolling } from "react-icons/fa";
import intuitiveIcon from '../assets/intuitive-design-icon.webp';
import customizableIcon from '../assets/customizable-plans-icon.png';
import budgetIcon from '../assets/budget-visuals-icon.png';
import cloudIcon from '../assets/cloud-storage-icon.png';
import shareIcon from '../assets/share-with-friends-icon.avif';
import hiddenIcon from '../assets/hidden-gems-icon.jpg';
import packingIcon from '../assets/packing-reminders-icon.webp';

const Home = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [userName, setUserName] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); // To store the search input
  const [suggestions, setSuggestions] = useState([]); // To store filtered suggestions

  // List of all locations for suggestions and navigation
  const locations = [
    { name: "Varkala", path: "/varkala" },
    { name: "Vagamon", path: "/vagamon" },
    { name: "Munnar", path: "/munnar" },
    { name: "Papikondalu", path: "/papikondalu" },
    { name: "Chikmanglore", path: "/chikmanglore" },
    { name: "Chandragiri", path: "/chandragiri" },
    { name: "Lambasingi", path: "/lambasingi" },
    { name: "Om Beach", path: "/ombeach" },
  ];

  // Retrieve user details from localStorage when the component mounts
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name); // Set the user name for display
    }
  }, []);

  // Handle input change and update suggestions
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Filter locations based on input text
    if (value) {
      const filteredSuggestions = locations.filter((location) =>
        location.name.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]); // Clear suggestions if input is empty
    }
  };

  // Handle navigation when a suggestion is clicked
  const handleSuggestionClick = (path) => {
    navigate(path); // Navigate to the respective location page
    setSuggestions([]); // Clear suggestions after selection
    setSearchTerm(""); // Optionally clear the search term
  };

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data from localStorage
    navigate("/login"); // Redirect to login page
  };

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState); // Toggle dropdown visibility
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">TripIt</div>
        <nav>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/help")}>Help</span>

          <div className="profile-container">
            <FaUserCircle
              className="profile-icon"
              onClick={toggleDropdown} // Toggle dropdown visibility
            />
            {showDropdown && (
              <div className="dropdown-menu">
                <p onClick={() => navigate("/viewbudget")}>Track Budget</p> {/* Redirect to Track Budget */}
                <p onClick={handleLogout}>Logout</p> {/* Logout functionality */}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Search Bar */}
      <section className="search-section">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search places..."
            value={searchTerm}
            onChange={handleSearchChange} 
          />
          <button onClick={() => handleSuggestionClick(`/search-results/${searchTerm}`)}>🔍</button>
        </div>
      </section>

      {suggestions.length > 0 && (
        <div className="suggestions">
          {suggestions.map((suggestion) => (
            <p
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion.path)}
            >
              {suggestion.name}
            </p>
          ))}
        </div>
      )}

      {/* Recommended Destinations */}
      <section className="recommended-section">
        <h2>Recommended Destination</h2>
        <div className="card-container">
          <div className="card" onClick={() => navigate("/kerala")}>
            <img src={keralaImage} alt="Kerala" />
            <p className="state-name">Kerala</p>
          </div>
          <div className="card" onClick={() => navigate("/karnataka")}>
            <img src={karnatakaImage} alt="Karnataka" />
            <p className="state-name">Karnataka</p>
          </div>
          <div className="card" onClick={() => navigate("/andhra")}>
            <img src={andhraImage} alt="Andhra" />
            <p className="state-name">Andhra Pradesh</p>
          </div>
        </div>
      </section>

      {/* Traveler Experiences Section */}
      <section className="experiences-section">
        <h2 className="section-title">Traveler Experiences</h2>
        <p className="section-subtitle">Hear what explorers say about TripIt</p>
        <div className="experience-cards">
          {[ 
            { name: "Aarthi M.", review: "TripIt made our Kerala trip magical! Everything from booking to budget tracking was seamless.", rating: 5 },
            { name: "Harini M.", review: "Loved how I could customize our entire plan. Varkala beaches were a dream!", rating: 4 },
            { name: "Meena R.", review: "Excellent UI, simple to use and super fast planning tool.", rating: 5 }
          ].map((exp, idx) => (
            <div key={idx} className="experience-card">
              <div className="user-initial">{exp.name.charAt(0)}</div>
              <div className="user-content">
                <p className="review-text">"{exp.review}"</p>
                <div className="review-footer">
                  <span className="user-name">— {exp.name}</span>
                  <span className="rating">
                    {"★".repeat(exp.rating)}{"☆".repeat(5 - exp.rating)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="tripit-standout">
        <h2>Why TripIt Stands Out</h2>
        <p>Plan smarter, travel better. Your intelligent, all-in-one travel assistant is here.</p>

        <div className="features">
          <div className="feature">
            <img src={intuitiveIcon} alt="Intuitive Design" />
            <h3>Intuitive Design</h3>
            <p>Navigate easily from login to itinerary — even first-time users feel like pros.</p>
          </div>
          <div className="feature">
            <img src={customizableIcon} alt="Customizable Plans" />
            <h3>Customizable Plans</h3>
            <p>Build your trip schedule your way. Add times, locations, activities, and notes with ease.</p>
          </div>
          <div className="feature">
            <img src={budgetIcon} alt="Budget Visuals" />
            <h3>Budget Visuals</h3>
            <p>Track your trip spending live with interactive charts and category breakdowns.</p>
          </div>
          <div className="feature">
            <img src={cloudIcon} alt="Cloud Storage" />
            <h3>Cloud Storage</h3>
            <p>Access your trip plan from any device, anytime — securely synced to the cloud.</p>
          </div>
          <div className="feature">
            <img src={shareIcon} alt="Share with Friends" />
            <h3>Share with Friends</h3>
            <p>Send your plan to others or invite them to collaborate — perfect for groups.</p>
          </div>
          <div className="feature">
            <img src={hiddenIcon} alt="Hidden Gems" />
            <h3>Hidden Gems</h3>
            <p>Discover recommended spots curated based on your destination and style.</p>
          </div>
          <div className="feature">
            <img src={packingIcon} alt="Packing Reminders" />
            <h3>Packing Reminders</h3>
            <p>We remind you what to bring based on your trip length and location climate.</p>
          </div>
        </div>

        <div className="rating">
          <h3>⭐️⭐️⭐️⭐️⭐️ 4.8/5 average rating</h3>
          <p>Based on over 1,200+ verified traveler experiences</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
