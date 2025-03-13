import React, { useState, useEffect } from "react";
import holiImage from './assets/holi.jpg';  // Import the image
import "./App.css";  // Import custom CSS

const HoliApp = () => {
  const [timeLeft, setTimeLeft] = useState("00:00:00");

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

  return (
    <div className="custom-container">
      <h1 className="custom-heading">
        HAPPY HOLI TO ALL THE TRANSPORTATION ENGINEERS!
      </h1>

      <img 
        src={holiImage}  // Use the imported image here
        alt="Holi Celebration"
        className="custom-img"
      />

      <h1 className="custom-heading">
        May your life be as vibrant and smooth as the best-designed roadways! Enjoy the festivities and let the colors flow like traffic on a perfect route!
      </h1>

      <h6 className="custom-subheading">DANU GOWDA (Aargus)</h6>

      <h3 className="custom-subheading">Countdown to Holi:</h3>
      <div className="custom-time">{timeLeft}</div>
    </div>
  );
};

export default HoliApp;
