import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/index";
import SideBar2 from "../components/Sidebar2";
import Navbar2 from "../components/Navbar2";
import AfterLogin from "../components/AfterLogin"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function HomePage(){
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
    setIsOpen(!isOpen);
  };
    return(
        <>
            <Navbar2 toggle={toggle} />
            <AfterLogin/>
            <SideBar2 />
            <Footer></Footer>
        </>

    )
}
export default HomePage;