import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Profile from "../components/Profile";
import SideBar2 from "../components/Sidebar2";

const ProfilePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      
      <Navbar2 toggle={toggle}/>
      <SideBar2/>
      <Profile/>
      <Footer/>
    </>
  );
};

export default ProfilePage;
