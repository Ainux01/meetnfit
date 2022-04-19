import React, { useState } from "react";
import Navbar from "../components/Navbar";
import FormInput from "../components/Form";
import SideBar2 from "../components/Sidebar2";
import Footer from "../components/Footer";
const Inscription = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Navbar toggle={toggle}/>
      <FormInput/>
      <Footer/>
    </>
  );
};

export default Inscription;
