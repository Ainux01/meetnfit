import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/SideBar";
import HeroSection from "../components/HeroSection";
import InfoSection from "../InfoSection/index";
import { homeObjOne, homeObjTwo } from "../InfoSection/Data";
import Services from "../components/Services";
const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjOne} />
      <Services />
    </>
  );
};

export default Home;