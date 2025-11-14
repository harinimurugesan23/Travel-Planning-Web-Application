import React, { useState, useEffect } from "react";
import "../styles.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const userEmail = localStorage.getItem('userEmail');

const Plan = () => {
	const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState("Lambasingi");
  const [scheduleList, setScheduleList] = useState([
    { date: "", time: "", desc: "" },
  ]);

   const handleCustomizeClick = () => {
    navigate('/customize'); // Navigate to Customize page
  };

  const handlePaymentClick = () => {
    navigate('/payment'); // Navigate to Payment page
  };
  
  
  

  // Plans for different locations
  const plans = {
    Lambasingi: [
      { day: "Day 1: Arrival & Local Exploration", activities: [
          "8:00 AM – Arrival at Lambasingi",
          "9:00 AM – Check-in at Chill Breeze Resort & breakfast",
          "12:00 PM – Visit Kothapalli Waterfalls",
          "3:00 PM – Explore Lambasingi Viewpoint",
          "6:00 PM – Return to resort and relax",
          "8:00 PM – Dinner at resort",
        ],
      },
      { day: "Day 2: Nature & Adventure", activities: [
          "7:00 AM – Early morning walk in the misty forest",
          "9:00 AM – Breakfast at resort",
          "10:30 AM – Trek to Susan Garden (Apple Orchards Area)",
          "12:30 PM – Lunch (picnic-style or local eatery)",
          "3:00 PM – Visit Yerravaram Waterfalls",
          "6:30 PM – Bonfire at resort (optional)",
          "8:00 PM – Dinner",
        ],
      },
      { day: "Day 3: Offbeat & Cultural", activities: [
          "6:30 AM – Sunrise view at Lambasingi Hilltop",
          "9:00 AM – Breakfast at resort",
          "10:00 AM – Visit Thajangi Reservoir",
          "1:00 PM – Lunch at local tribal village eatery",
          "3:00 PM – Explore Coffee & Pepper Plantations",
          "5:00 PM – Return to resort & enjoy tea/coffee",
          "8:00 PM – Dinner and rest",
        ],
      },
      { day: "Day 4: Check-out & Return", activities: [
          "8:00 AM – Breakfast at resort",
          "9:30 AM – Check-out",
          "10:00 AM – Optional short visit to Vanajangi Hills",
          "12:00 PM – Departure",
        ],
      },
    ],
  
	
	Papikondalu: [
    { 
      day: "Day 1: Arrival & Scenic Exploration", 
      activities: [
        "8:00 AM – Arrival at Papikondalu",
        "9:00 AM – Check-in at a local riverside resort & breakfast",
        "12:00 PM – Visit the famous Papi Hills viewpoint",
        "3:00 PM – Explore the nearby Tribal Villages along the Godavari River",
        "6:00 PM – Return to resort, relax, and enjoy the peaceful environment",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: River Cruise & Local Culture", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Take a boat cruise on the Godavari River, passing through lush forests and tribal villages",
        "12:00 PM – Visit the Saraswathi Temple at Saraswathi Ghat",
        "2:00 PM – Lunch at a local eatery near the river",
        "4:00 PM – Explore the Papikondalu hills for a short trek and panoramic views",
        "6:30 PM – Bonfire and tribal dance performances at the resort (optional)",
        "8:00 PM – Dinner and relax at the resort",
      ],
    },
    { 
      day: "Day 3: Adventure & Nature Walk", 
      activities: [
        "6:30 AM – Sunrise view from a hilltop with a view of the river",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit the Bhupathipalem Reservoir and take a boat ride around the reservoir",
        "12:00 PM – Visit the local tribal markets to buy handmade crafts and souvenirs",
        "3:00 PM – Trek through the dense forests of Papikondalu and enjoy nature walks",
        "6:00 PM – Return to the resort, relax and enjoy tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to Ramappa Temple near the region (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  
  
  Chandragiri: [
    { 
      day: "Day 1: Arrival & Local Exploration", 
      activities: [
        "8:00 AM – Arrival at Chandragiri, Tirupati",
        "9:00 AM – Check-in at Heritage Residency & breakfast",
        "12:00 PM – Visit the Chandragiri Fort and Museum",
        "2:00 PM – Explore the ancient temples in the area",
        "4:00 PM – Visit the Ranganatha Swamy Temple",
        "6:00 PM – Return to resort, relax, and enjoy the peaceful environment",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Culture & Adventure", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Explore the Chandragiri Palace complex",
        "12:00 PM – Visit the Tirupati Balaji Temple (half-day trip)",
        "2:00 PM – Lunch at a local restaurant",
        "4:00 PM – Visit the Sri Venkateswara National Park for a wildlife experience",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Nature & Historical Exploration", 
      activities: [
        "6:30 AM – Sunrise view from the top of Chandragiri Fort",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit the nearby Srikalahasti Temple",
        "12:30 PM – Lunch at a local eatery",
        "2:00 PM – Explore the historical monuments in and around Tirupati",
        "4:00 PM – Visit the Padmavathi Ammavari Temple in Tiruchanoor",
        "6:00 PM – Return to resort for tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:30 AM – Check-out from Heritage Residency",
        "10:00 AM – Optional visit to Talakona Waterfalls (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  Vagamon: [
    { 
      day: "Day 1: Arrival & Scenic Exploration", 
      activities: [
        "8:00 AM – Arrival at Vagamon",
        "9:00 AM – Check-in at a local resort & breakfast",
        "12:00 PM – Visit Vagamon Pine Forest for a nature walk",
        "2:00 PM – Explore the Vagamon Meadows and take a peaceful stroll",
        "4:00 PM – Visit the Kurisumala Ashram",
        "6:00 PM – Return to the resort, relax and enjoy the peaceful environment",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Adventure & Nature", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Visit the Vagamon Lake for boating and photography",
        "12:00 PM – Explore the Vagamon Falls",
        "2:00 PM – Lunch at a local restaurant",
        "4:00 PM – Trek to the Vagamon hilltop for panoramic views",
        "6:30 PM – Return to the resort, relax, and enjoy tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Cultural & Spiritual Experience", 
      activities: [
        "6:30 AM – Sunrise view at Vagamon Hilltop",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit the Thangalpara Mosque",
        "12:00 PM – Lunch at a local eatery",
        "2:00 PM – Visit the Idukki Dam",
        "4:00 PM – Explore the surrounding tea estates of Vagamon",
        "6:00 PM – Return to resort, relax, and enjoy tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to the Elaveezha Poonchira for a short trek (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  Varkala: [
    { 
      day: "Day 1: Arrival & Beach Exploration", 
      activities: [
        "8:00 AM – Arrival at Varkala",
        "9:00 AM – Check-in at a beachfront resort & breakfast",
        "12:00 PM – Visit Varkala Beach and relax by the shore",
        "2:00 PM – Explore the Papanasam Beach and its spiritual significance",
        "4:00 PM – Visit the Varkala Cliff for panoramic views of the Arabian Sea",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Spiritual & Cultural Experience", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Visit the Janardana Swamy Temple",
        "11:00 AM – Take a walk along the Varkala Cliff and visit local shops",
        "1:00 PM – Lunch at a beachside cafe",
        "3:00 PM – Visit the Sivagiri Mutt for a cultural experience",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Adventure & Nature", 
      activities: [
        "6:30 AM – Sunrise view from the Varkala Cliff",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Explore the Kappil Beach and enjoy water sports",
        "12:00 PM – Visit the Anjengo Fort",
        "2:00 PM – Lunch at a local seafood restaurant",
        "4:00 PM – Enjoy a boat ride at Paravur Lake",
        "6:00 PM – Return to resort, relax and enjoy tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to the Sree Narayana Guru Smriti Mandiram (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  Munnar: [
    { 
      day: "Day 1: Arrival & Scenic Exploration", 
      activities: [
        "8:00 AM – Arrival at Munnar",
        "9:00 AM – Check-in at a resort & breakfast",
        "12:00 PM – Visit the Tea Gardens of Munnar and enjoy a walk",
        "2:00 PM – Explore the Attukal Waterfalls",
        "4:00 PM – Visit the Tea Museum to learn about Munnar's tea history",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Adventure & Nature", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Visit the Eravikulam National Park (Home to the Nilgiri Tahr)",
        "12:00 PM – Trek to the Anamudi Peak, the highest point in South India",
        "2:00 PM – Lunch at a local restaurant",
        "4:00 PM – Visit the Mattupetty Dam for a boating experience",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Cultural & Spiritual Exploration", 
      activities: [
        "6:30 AM – Sunrise view from the top of a tea plantation",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit the Blossom Park for a nature walk",
        "12:00 PM – Visit the Muniyara Dolmens (ancient burial sites)",
        "2:00 PM – Lunch at a local restaurant",
        "4:00 PM – Visit the Marayoor Sandalwood Forest",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to the Chinnar Wildlife Sanctuary (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  "Om Beach": [
    { 
      day: "Day 1: Arrival & Beach Relaxation", 
      activities: [
        "8:00 AM – Arrival at Om Beach",
        "9:00 AM – Check-in at a beachfront resort & breakfast",
        "12:00 PM – Relax on Om Beach and enjoy the scenic views",
        "2:00 PM – Explore nearby Gokarna Beach",
        "4:00 PM – Visit the Om Beach Temple",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Adventure & Exploration", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Go for a boat ride along the coastline",
        "12:00 PM – Visit Kudle Beach for a more relaxed atmosphere",
        "2:00 PM – Lunch at a beachside cafe",
        "4:00 PM – Try water sports like parasailing or jet skiing",
        "6:00 PM – Return to the resort, relax and enjoy tea/coffee",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Cultural & Spiritual Experience", 
      activities: [
        "6:30 AM – Sunrise view from the beach",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit Mirjan Fort and explore the ancient ruins",
        "12:00 PM – Lunch at a local seafood restaurant",
        "2:00 PM – Visit the Gokarna Temple for a spiritual experience",
        "4:00 PM – Explore the local markets for souvenirs",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to the Mirjan Beach (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
  
  Chikmanglore : [
    { 
      day: "Day 1: Arrival & Scenic Exploration", 
      activities: [
        "8:00 AM – Arrival at Chikmagalur",
        "9:00 AM – Check-in at a hilltop resort & breakfast",
        "12:00 PM – Visit the Coffee Plantations and learn about coffee production",
        "2:00 PM – Explore the Mullayanagiri Peak (Highest point in Karnataka)",
        "4:00 PM – Visit the Baba Budangiri Hills and its spiritual significance",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner at the resort",
      ],
    },
    { 
      day: "Day 2: Adventure & Nature", 
      activities: [
        "7:00 AM – Breakfast at the resort",
        "9:00 AM – Trek to the Hebbe Waterfalls",
        "12:00 PM – Picnic-style lunch near the waterfalls",
        "2:00 PM – Visit the Kalhatti Falls and enjoy the surroundings",
        "4:00 PM – Explore the Kemmangundi Gardens and relax in the scenic beauty",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 3: Spiritual & Cultural Experience", 
      activities: [
        "6:30 AM – Sunrise view from the hilltop",
        "8:00 AM – Breakfast at the resort",
        "10:00 AM – Visit the Sringeri Sharada Peetham (Ancient temple)",
        "12:00 PM – Visit the Hirekolale Lake for a peaceful boat ride",
        "2:00 PM – Lunch at a local restaurant",
        "4:00 PM – Visit the Chikmagalur Town and explore local markets",
        "6:00 PM – Return to the resort and relax",
        "8:00 PM – Dinner and rest",
      ],
    },
    { 
      day: "Day 4: Departure & Return", 
      activities: [
        "8:00 AM – Breakfast at the resort",
        "9:00 AM – Pack up and check-out from the resort",
        "10:00 AM – Optional visit to the Jhari Waterfalls (if time allows)",
        "12:00 PM – Departure",
      ],
    },
  ],
	
  };

  return (
    <div className="plan-container" style={{ padding: "2rem" }}>
      <h2>🗓️ Modify Your Schedule Plan</h2>

      <div>
        <label htmlFor="location">Select Tourist Location:</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          style={{ padding: "0.5rem", margin: "1rem 0" }}
        >
          <option value="Lambasingi">Lambasingi</option>
          <option value="Papikondalu">Papikondalu</option>
          <option value="Chandragiri">Chandragiri</option>
          <option value="Vagamon">Vagamon</option>
          <option value="Varkala">Varkala</option>
          <option value="Munnar">Munnar</option>
          <option value="Om Beach">Om Beach</option>
          <option value="Chikmanglore">Chikmanglore</option>
        </select>
      </div>

      <h3 style={{ marginTop: "2rem", color: "#007BFF" }}>
         4-Day Trip Schedule for {selectedLocation}
      </h3>
      {plans[selectedLocation]?.map((dayPlan, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#ffffff",
            borderLeft: "6px solid #007BFF",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.05)",
          }}
        >
          <h4 style={{ color: "#007BFF", marginBottom: "0.5rem" }}>
            {dayPlan.day}
          </h4>
          <ul style={{ paddingLeft: "1.2rem", lineHeight: "1.7", color: "#333" }}>
            {dayPlan.activities.map((activity, idx) => (
              <li key={idx}>{activity}</li>
            ))}
          </ul>
        </div>
      ))}
	  
	  
 
    <div className="custom-buttons-container">
      <button className="custom-button" onClick={handleCustomizeClick}>
        Customize the plan
      </button>
      <button className="custom-button" onClick={handlePaymentClick}>
        Continue to payment
      </button>
    </div>
  
			
	</div>
	
 );
};

export default Plan;
