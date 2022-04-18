import React from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import toggle from "react-toggle";
function SideBar2 () {
    const body = document.querySelector("body");
    
    function Event1(){  
        const sidebar = body.querySelector("nav");
        const toggle = body.querySelector(".toggle");
        
        //sidebar.classList.toggle("close");
        sidebar.classList.remove("close");
    }
    function Event2(){
        const searchBtn = body.querySelector(".search-box");
        
    }
    
    function Event3 (){
        const modeText = body.querySelector(".mode-text");
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            modeText.innerText = "Light mode";
        }else{
            modeText.innerText = "Dark mode";
        }
    }
   return(
    <nav class="sidebar close">
        <link href='https://unpkg.com/boxicons@2.1.1/css/boxicons.min.css' rel='stylesheet'></link>
        <header>
            <div class="image-text">
                <span class="image">
                    <img src="logo.png" alt=""/>
                </span>
                <div class="text logo-text">
                    <span class="name">    </span>    
                </div>
                <i class='bx bx-chevron-right toggle' onClick={Event1} ></i>
            </div>              
        </header>
        <div class="menu-bar">
            <div class="menu" >            
                <li class="search-box" onClick={Event1} >
                    <i class='bx bx-search icon' ></i>
                    <input type="text" placeholder="Search..."/>
                </li>
                <ul class="menu-links">
                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-home-alt icon' ></i>
                            <span class="text nav-text">Accueil</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bar-chart-alt-2 icon' ></i>
                            <span class="text nav-text">Profil</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-bell icon'></i>
                            <span class="text nav-text">Notifications</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-pie-chart-alt icon' ></i>
                            <span class="text nav-text">Activités Sportives</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-heart icon' ></i>
                            <span class="text nav-text">Tournois</span>
                        </a>
                    </li>

                    <li class="nav-link">
                        <a href="#">
                            <i class='bx bx-wallet icon' ></i>
                            <span class="text nav-text">Coaches</span>
                        </a>
                    </li>

                </ul>
            </div>

            <div class="bottom-content">
                <li class="">
                    <a href="#">
                        <i class='bx bx-log-out icon' ></i>
                        <span class="text nav-text">Se deconnecter</span>
                    </a>
                </li>

                <li class="mode">
                    <div class="sun-moon">
                        <i class='bx bx-moon icon moon' ></i>
                        <i class='bx bx-sun icon sun'></i>
                    </div>
                    <span class="mode-text text">Dark mode</span>

                    <div class="toggle-switch">
                        <span class="switch" onClick={Event3}></span>
                    </div>
                </li>
                
            </div>
        </div>

    </nav>
    );
};
export default SideBar2;