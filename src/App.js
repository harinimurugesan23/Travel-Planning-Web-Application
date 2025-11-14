import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Intro from "./components/Intro";
import About from "./components/About";
import Help from "./components/Help";
import Login from "./components/Login";
import Signin from "./components/Signin";
import Home from "./components/Home.js";
import Kerala from "./components/Kerala.js";
import Varkala from "./components/Varkala.js";
import Schedule from "./components/Schedule.js";
import Plan from "./components/Plan.js";
import Vagamon from "./components/Vagamon.js";
import Munnar from "./components/Munnar.js";
import Andhra from "./components/Andhra.js";
import Chikmanglore from "./components/Chikmanglore.js";
import Ombeach from "./components/Ombeach.js";
import Papikondalu from "./components/Papikondalu.js";
import Chandragiri from "./components/Chandragiri.js";
import Lambasingi from "./components/Lambasingi.js";
import Karnataka from "./components/Karnataka.js";
import Payment from "./components/Payment.js";
import Customize from "./components/Customize.js";
import ViewBudget from "./components/ViewBudget.js";
import Admin from "./components/Admin.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/about" element={<About />} />
          <Route path="/help" element={<Help />} />
		  <Route path="/login" element={<Login />} />
		  <Route path="/signin" element={<Signin />} />
		  <Route path="/home" element={<Home />} />
		  <Route path="/kerala" element={<Kerala />} />
		  <Route path="/varkala" element={<Varkala />} />
          <Route path="/schedule" element={<Schedule />} />		  
		  <Route path="/plan" element={<Plan />} />	
		  <Route path="/vagamon" element={<Vagamon />} />	
		  <Route path="/munnar" element={<Munnar />} />	
		  <Route path="/andhra" element={<Andhra />} />	
		  <Route path="/chikmanglore" element={<Chikmanglore />} />	
		  <Route path="/ombeach" element={<Ombeach />} />
		  <Route path="/karnataka" element={<Karnataka />} />
		  <Route path="/papikondalu" element={<Papikondalu />} />
		  <Route path="/chandragiri" element={<Chandragiri />} />
		  <Route path="/lambasingi" element={<Lambasingi />} />
		  <Route path="/payment" element={<Payment />} />
		  <Route path="/customize" element={<Customize />} />
		  <Route path="/viewbudget" element={<ViewBudget />} />
		  <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
