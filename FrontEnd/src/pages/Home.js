import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../InfoSection/index";
import { homeObjOne, homeObjTwo } from "../InfoSection/Data";
import Services from "../components/Services";
import Footer from "../components/Footer/index";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
const Home = () => {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
