import React, { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Signup from "../components/Signin";
const SigninPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      <Navbar toggle={toggle}/>
      <Signup/>
      <Footer/>
    </>
  );
};

export default SigninPage;
