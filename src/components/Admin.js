import React, { useEffect, useState } from "react";
import "../styles.css";

const Admin = () => {
  const [plans, setPlans] = useState([]);
  const [customPlans, setCustomPlans] = useState([]);

  useEffect(() => {
    // Fetch normal trip plans
    const fetchPlans = async () => {
      try {
        const res = await fetch("https://travel-backend-ceam.onrender.com/api/plans");
        const data = await res.json();
        setPlans(data);
      } catch (error) {
        console.error("Error fetching trip plans:", error);
      }
    };

    

    fetchPlans();
    
  }, []);

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9fdfc" }}>
      <h2 style={{ color: "#198754", textAlign: "center" }}>📋 All User Plans</h2>

      {/* Standard Plans Table */}
      <div className="table-wrapper" style={{ marginTop: "2rem", overflowX: "auto" }}>
        <h4 style={{ color: "#0d6efd" }}>🛫 Standard Trip Plans</h4>
        <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #ccc" }}>
          <thead style={{ backgroundColor: "#e6f9f0" }}>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Location</th>
              <th>Destination</th>
              <th>Budget</th>
              <th>Persons</th>
              <th>Total</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {plans.length > 0 ? (
              plans.map((plan, index) => (
                <tr key={index} style={{ textAlign: "center" }}>
                  <td>{plan.name}</td>
                  <td>{plan.email}</td>
                  <td>{plan.phone}</td>
                  <td>{plan.location}</td>
                  <td>{plan.destination}</td>
                  <td>₹{plan.budget}</td>
                  <td>{plan.persons}</td>
                  <td>₹{plan.total}</td>
                  <td>{plan.startDate}</td>
                  <td>{plan.endDate}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10">No plans available.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default Admin;
