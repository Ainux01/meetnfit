import React ,{useState} from "react";
import "./App.css";
import Home from "./pages/Home";
import SigninPage from "./pages/signin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inscription from "./pages/Inscription";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import ChatComponent from "./components/Chat";




function App() {
  
  return (
    
    <Router>
    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/signin" element={<SigninPage />} exact />
      <Route path="/Form" element={<Inscription />} exact />
      <Route path="/Profile" element={<ProfilePage/>} exact />
      <Route path="/HomePage" element={<HomePage/>} exact />
      <Route path="/support" element={<ChatComponent ></ChatComponent>} exact />
    </Routes>
  </Router>
   
  );
}
export default App;
