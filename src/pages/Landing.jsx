import React from "react";
import EventShedul from "../components/landingPage/EventShedul";
import HeroSection from "../components/landingPage/HeroSection";
import NavBar from "../layout/NavBar";

const Landing = () => {
  return (
    <NavBar>
      <HeroSection />
      <EventShedul />
    </NavBar>
  );
};

export default Landing;
