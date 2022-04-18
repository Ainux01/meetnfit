import { useState } from "react";
import "./form.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Signup from "../Signin";
import Footer from "../Footer";

function FormInput  (){
   
    //const [nom,setNom]=useState('')
   const [email,setEmail]=useState('')
    const [mdp,setMdp]=useState('')
    const location=useLocation()
    
    const [nom_complet,setNomu]=useState('')
    const [adresse,setAdr]=useState('')
    const [tel,setTel]=useState('')
    const [age,setAge]=useState('')
    //const [Sexe,setSexe]=useState('')
    const [activite,setAct]=useState('')
    const [num,setNum]=useState('')
    
    /*nom=setNomu(Signup.nom)
    email=setEmail(Signup.email)
    mdp=setMdp(Signup.mdp)*/
    /*const nom=Signup.nom
    const email=Signup.email
    const mdp=Signup.mdp*/
    const sexe="Femelle"

    const handleClick1=(e)=>{
        e.preventDefault()
        window.location.href="http://localhost:3000/HomePage"
        const nom=location.state.nom;
        const user={nom, email,mdp,nom_complet,adresse,num,activite,age,sexe}
        console.log(user)
        fetch("http://localhost:8085/user/add",{
            method: "POST",
            headers:{"Content-Type":"application/json"
        },
            body:JSON.stringify(user)
        }).then(()=>{
            console.log("In");
            
            
        })
    }
  
  return (
      <>
      <body class="body">
    <div class="kaoutar">
    <div class="title">Inscription</div>
    <div class="content">
      <form action="#">
        <div class="user-details">
          <div class="input-box">
            <span class="details">Nom Complet</span>
            <input type="text" placeholder="Entrer votre nom " required value={nom_complet}
                            onChange={(e)=>setNomu(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Adresse</span>
            <input type="text" placeholder="Entrer votre adresse" required value={adresse}
                            onChange={(e)=>setAdr(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Age</span>
            <input type="text" placeholder="Entrer votre age" required value={age}
                            onChange={(e)=>setAge(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Numéro de telephone</span>
            <input type="text" placeholder="Ex : +212 625 850 517" required value={num} onChange={(e)=>setNum(e.target.value)}/>
          </div>
          <div class="input-box">
            <span class="details">Activités préférées</span>
            <input type="text"  required value={activite}
                            onChange={(e)=>setAct(e.target.value)}/>
          </div>
          
        </div>
        <div class="gender-details">
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Sexe</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender" color="#000">Masculin</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Feminin</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Autre</span>
            </label>
          </div>
        </div>
        <div class="button">
          <button type="submit" value="Enregistrer" onClick={handleClick1}/>
        </div>
      </form>
    </div>
  </div>
  
  </body>
 
</>
  );
};

export default FormInput;