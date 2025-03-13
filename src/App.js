import React, { useState, useEffect } from "react";
import holiImage from './assets/holi.jpg';  // Import the image


import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const HoliApp = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");
  const [color, setColor] = useState("btn-primary");

  useEffect(() => {
    const holiDate = new Date("March 25, 2025 00:00:00").getTime();
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = holiDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("Happy Holi!");
      } else {
        const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
        const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
        const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
        setTimeLeft(`${hours}:${minutes}:${seconds}`);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const throwColors = () => {
    const colors = ["btn-danger", "btn-success", "btn-warning", "btn-info", "btn-secondary"];
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <div className="container text-center mt-5">
  
  <h1 className="display-4 text-danger fw-bold ">
  "HAPPY HOLI TO ALL THE TRANSPORTATION ENGINEERS!"
</h1>

  <img 
        src={holiImage}  // Use the imported image here
        alt="Holi Celebration"
        className="rounded-circle"  // Bootstrap class for rounded image
        style={{ width: '150px', height: '150px', objectFit: 'cover' }}  // Optional: Control size and maintain aspect ratio
      />

      <h1 className="display-4 text-blue ">"May your life be as vibrant and smooth as the best-designed roadways! enjoy the festivities and let the colors flow like traffic on a perfect route!"</h1>
     
      <h6 className="text-success fw-bold fs-7">DANU GOWDA (Aargus)</h6>

      <h3 className="text-primary">Countdown to Holi:</h3>
      <div className="display-5 fw-bold text-danger">{timeLeft}</div>
     
    </div>
  );
};

export default HoliApp;
