import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { FcSportsMode } from "react-icons/fc";
import Signin from "../Signin";
import "./NavBar2.css"
const Navbar2 = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const [name,setName]=useState();
  name=setName(Signin.username);
  const changeNav = () => {
    if (window.scrollY >= 70) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);
  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
          <nav class="AA">
         <ul class="list">
          
            <li class="logo-time"><FcSportsMode style={{ fontSize: "50px" }}  /></li>
            <li class="mnf"><span style={{ color: "#ff9800" }}>M</span>eet N'Fit</li>
          
            <li class="btn"><span class="fa-solid fa-bars"></span></li>
            <li class="search-icon">
               <input type="search" placeholder="Search"/>
               <label class="icon">
               <span class="fa-solid fa-search"></span>
               </label>
            </li>
            <li class="Notification">
              <span class="fa-solid fa-bell"></span>
            </li>
            <li class="message">
              <span class="fa-solid fa-envelope"></span>
            </li>
            <li class="profile">
              <p input={name}></p>
              <span class="fa-solid fa-circle-user" ></span>
            </li>
         </ul>
      </nav>
      
    </>
  );
};

export default Navbar2;

