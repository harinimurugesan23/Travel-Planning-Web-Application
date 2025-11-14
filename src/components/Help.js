import React from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

const Help = () => {
  const navigate = useNavigate(); 

  return (
    <div className="help-container">
      {/* Navigation Bar */}
      <header className="navbar">
        <div className="logo">TripIt</div> {/* Top-left logo */}
        <nav>
          <span onClick={() => navigate("/about")}>About</span>
          <span onClick={() => navigate("/help")}>Help</span>
        </nav>
      </header>

      {/* Help Content */}
      <section className="help-content">
        <h2>Help & Support</h2>
        <p>
          Need assistance? Our support team is here to help! Below are some frequently 
          asked questions to guide you.
        </p>

        {/* FAQ Section */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          
          <div className="faq-item">
            <h4>❓ How do I create an account?</h4>
            <p>
              You can sign up for free by clicking the "Sign up free" button on the homepage
              and filling out the required details.
            </p>
          </div>

          <div className="faq-item">
            <h4>❓ How can I book a hotel or flight?</h4>
            <p>
              After logging in, navigate to the "Book a Trip" section, select your destination,
              choose your preferred hotel or flight, and confirm your booking.
            </p>
          </div>

          <div className="faq-item">
            <h4>❓ Can I modify my travel itinerary?</h4>
            <p>
              Yes! Go to the "My Trips" section, where you can update or delete items 
              from your itinerary before your trip begins.
            </p>
          </div>

          <div className="faq-item">
            <h4>❓ How do I contact customer support?</h4>
            <p>
              You can reach us through our 24/7 support email at <b>support@tripit.com</b> 
              or call our helpline at <b>+1-800-TRIP-HELP</b>.
            </p>
          </div>
        </div>

        
      </section>
    </div>
  );
};

export default Help;
