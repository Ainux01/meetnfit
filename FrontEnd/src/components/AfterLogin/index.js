import React,{useState} from "react";
import "./AfterLogin.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import {fetchUserData} from '../api/authenticationService';

const AfterLogin=(props)=>{
    const dispatch=useDispatch();
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState({});

    React.useEffect(()=>{
        fetchUserData().then((response)=>{
            setData(response.data);
        }).catch((e)=>{
            localStorage.clear();
            props.history.push('/');
        })
    },[])

    const logOut=()=>{

        localStorage.clear();
        props.history.push('/');

    }
    return(
        <>
            <div class="Mariam">
                
            </div>
        </>
    )
}
export default AfterLogin;