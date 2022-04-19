import React, {useEffect, useState } from "react";
import { connect } from 'react-redux';
import { authenticate, authFailure, authSuccess } from '../Red/authActions';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { fetchUserData, userLogin ,Login} from "../api/authenticationService"; 
import {Alert,Spinner} from 'react-bootstrap';

import "./index.css";

function Signup({loading,error,...props}){
    
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()  
    const [name, setName] = useState() 
    const values={username,name,password,email}
    
    const handleSubmit2=(e)=>{
        e.preventDefault();
        fetchUserData();
        Login(values).then((response)=>{
            if(response.status===200){
                
                console.log(response);
                console.log("IN");
               window.location.href="/HomePage";
               //props.history.push('/HomePage');

            }
            else{
                props.loginFailure('Something Wrong! Please try again');
            }
        }).catch((err)=>{
            if(err && err.response){
                switch(err.response.status){
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication failed.Bad Credentials");
                        break;
                        default:
                            props.loginFailure('Something Wrong! Please try again');
                }
            }
            else{
                props.loginFailure('Something Wrong! Please try again');
            }
        });
    }
    const handleSubmit=(evt)=>{
        evt.preventDefault();
        props.authenticate();
        console.log(values);
        userLogin(values).then((response)=>{
            console.log("response",response);
            if(response.status===200){
                props.setUser(response.data);
                console.log(response.data);
                //window.location.href="Signin";
            }
            else{
                props.loginFailure('Something Wrong! Please try again');
            }
        }).catch((err)=>{
            if(err && err.response){
                switch(err.response.status){
                    case 401:
                        console.log("401 status");
                        props.loginFailure("Authentication failed.Bad Credentials");
                        break;
                        default:
                            props.loginFailure('Something Wrong! Please try again');
                }
            }
            else{
                props.loginFailure('Something Wrong! Please try again');
            }
        });
    }
    
    console.log("Loading ",loading);

    function change1(){
        const container = document.querySelector(".container");
        container.classList.add("sign-up-mode");
        
    }

    function change2(){
        const container = document.querySelector(".container");
        container.classList.remove("sign-up-mode");
    }

    return(       
        <>          
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div>
                <div class="container">
            <div class="forms-container">
                <div class="signin-signup">
                    <form class="sign-in-form" onSubmit={handleSubmit2} noValidate={false} >
                        <h2 class="title">Se connecter</h2>
                        <div class="input-field">
                            <i class="fa-solid fa-envelope" ></i>
                            <input  required type="text"  placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />  
                            <span></span>
                        </div>
                        <div class="input-field">
                            <i class="fa-solid fa-lock" ></i>
                            <input type="password"  required placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                             
                            <span></span>
                        </div>
                        <button type="submit"  class="btn_solid"  >Se connecter</button>
                        { error &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                            </Alert>

                        }
                    </form>
                    <form action="" class="sign-up-form">
                        <h2 class="title">S'inscrire</h2>
                        <div class="input-field">
                            <i class="fa-solid fa-user" ></i>
                            <input required type="text"   placeholder="Nom d'utilisateur" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                            <span></span>
                        </div>
                        <div class="input-field">
                            <i class="fa-solid fa-envelope" ></i>
                            <input type="text" required placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            <span></span>
                        </div>
                        <div class="input-field">
                            <i class="fa-solid fa-lock" ></i>
                            <input type="password" required placeholder="Mot de passe" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            <span></span>
                        </div>
                        <button type="submit"  class="btn_solid" onClick={handleSubmit}>S'inscrire</button>
                        
                         
                    </form>
                </div>
            </div>
            <div class="panels-container">
                <div class="panel left-panel">
                    <div class="content">
                        <h3>Première fois ?</h3>
                        <p>Créez votre compte pour découvrir les services étonnants que cette application peut vous offrir.</p>
                        <button class="btn transparent" id="sign-up-btn" onClick={change1}>S'inscrire</button>
                    </div>
                </div>
                <div class="panel right-panel">
                    <div class="content">
                        <h3>Welcome back !</h3>
                        <button class="btn transparent" id="sign-in-btn" onClick={change2}>Se connecter</button>
                    </div>
                </div>
                
            </div>
        </div>   
        </div>   
        </>);    
}
const mapStateToProps=({auth})=>{
    console.log("state ",auth)
    return {
        loading:auth.loading,
        error:auth.error
}}


const mapDispatchToProps=(dispatch)=>{

    return {
        authenticate :()=> dispatch(authenticate()),
        setUser:(data)=> dispatch(authSuccess(data)),
        loginFailure:(message)=>dispatch(authFailure(message))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Signup);