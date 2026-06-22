import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const ViewBudget = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const currentUserEmail = localStorage.getItem("userEmail");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://travel-backend-ceam.onrender.com/api/plans");
        const data = await res.json();

        const userPlans = data.filter((plan) => plan.email === currentUserEmail);
        setPlans(userPlans);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching plans:", err);
        setLoading(false);
      }
    };

    fetchData();
  }, [currentUserEmail]);

  const handleEdit = (plan) => {
    navigate("/schedule", {
      state: {
        ...plan,
        isEdit: true,
      },
    });
  };

  const COLORS = ["#20c997", "#0dcaf0", "#17a2b8", "#6f42c1"];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f0fff4" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2 style={{ color: "#198754" }}>💰 Your Travel Budget Overview</h2>
        <button
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#198754",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={() => navigate("/home")}
        >
          ⬅ Back to Home
        </button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : plans.length === 0 ? (
        <p>No plans found for your email.</p>
      ) : (
        <>
          {plans.map((plan) => {
            const totalBudget = plan.total;
            const organizerFee = totalBudget * 0.25;
            const hotel = totalBudget * 0.30;
            const food = totalBudget * 0.20;
            const travel = totalBudget * 0.25;

            const pieData = [
              { name: "Organizer Fee", value: organizerFee },
              { name: "Hotel", value: hotel },
              { name: "Food", value: food },
              { name: "Travel", value: travel },
            ];

            return (
              <div
                key={plan._id}
                style={{
                  border: "1px solid #ccc",
                  padding: "1rem",
                  borderRadius: "8px",
                  marginTop: "1rem",
                  backgroundColor: "#fff",
                }}
              >
                <h3 style={{ marginBottom: "1rem", color: "#0f5132" }}>
                  🏖️ Plan: {plan.destination}
                </h3>

                <p><strong>Name:</strong> {plan.name}</p>
                <p><strong>Email:</strong> {plan.email}</p>
                <p><strong>Total Budget:</strong> ₹{totalBudget}</p>

                <h4>💸 Budget Breakdown</h4>
                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                  <div
                    style={{
                      backgroundColor: "#20c997",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                      flex: "1 1 45%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h5>💼 Organizer Fee (25%)</h5>
                    <p>₹{organizerFee.toFixed(2)}</p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#0dcaf0",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                      flex: "1 1 45%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h5>🏨 Hotel (30%)</h5>
                    <p>₹{hotel.toFixed(2)}</p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#17a2b8",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                      flex: "1 1 45%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h5>🍽️ Food (20%)</h5>
                    <p>₹{food.toFixed(2)}</p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "#6f42c1",
                      padding: "1rem",
                      borderRadius: "8px",
                      color: "white",
                      flex: "1 1 45%",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <h5>🚗 Travel (25%)</h5>
                    <p>₹{travel.toFixed(2)}</p>
                  </div>
                </div>

                <h4 style={{ marginTop: "1rem" }}>📊 Visual Budget Distribution</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ViewBudget;
