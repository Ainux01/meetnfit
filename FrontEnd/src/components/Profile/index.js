import React, { useState, useEffect } from "react";
import './index1.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Profile() {
  //const [nom,setNom]=useState('')
  const [email, setEmail] = useState('')
  //const [mdp,setMdp]=useState('')
  const [nom_complet, setNomu] = useState('')
  const [adresse, setAdr] = useState('')
  const [tel, setTel] = useState('')
  const [age, setAge] = useState('')
  //const [Sexe,setSexe]=useState('')
  const [activite, setAct] = useState('')
  const [num, setNum] = useState('')
  const sexe = "féminin"
  const [users, setUsers] = useState([])
  const nom = "kbmoussa";
  const mdp = "kkk";

  const fetchData = () => {
    /*fetch("http://localhost:8085/user/get?nom=" + nom + "&mdp=" + mdp, {
      method: 'POST',
      headers: { "Content-Type": "application/json" }
    })
      .then(response => {
        return response.json()
      })
      .then(data => {
        users = setUsers(data)
        console.log(users)
      })*/
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <>

      <div class="K">

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <div class="wrapper">
          <div class="left">
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png" alt="user" width="100"></img>
            {users.map(
              users =>
                <div key={users.id}>
                  <div>
                    <p class="input-text">{users.nom_complet}</p>
                    <p class="input-text">{users.adresse}</p>
                  </div>
                </div>
                    )
            }
          </div>
                  
          <div class="right">
              <div class="info">
                {users.map(
                  users=>
                  <div key={users.id}>
                <h3>Profil</h3>
                <div class="info_data">
                  <div class="data">
                    <h4>Email</h4>
                    <p class="input-text">{users.email}</p>
                  </div>
                  <div class="data">
                    <h4>Numéro de téléphone</h4>
                    <p class="input-text">{users.num}</p>
                  </div>
                </div>
                </div>
              )}
              </div>
              <div class="projects">
                <h3>Projects</h3>
                <div class="projects_data">
                  <div class="data">{
                    users.map(
                      users=>
                      <div key={users.id}>
                    <h4>Activités favoris </h4>
                    <p class="input-text">{users.activite}</p>
                    </div>
                    )}
                  </div>
                </div>
              </div>
              <div class="social_media">
                <ul>
                  <li><a href="#"><i class="fa fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                </ul>
              </div>  
          </div>

        </div>
      </div>

        </>);
}

        export default Profile;
