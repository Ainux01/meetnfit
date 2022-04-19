import React from 'react';
import axios from 'axios';


const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const Login=(authRequest)=>{
    return axios({
        method:'POST',
        url:`http://localhost:8080/api/v1/registration/signin`,
        data :authRequest,
        mode:'no-cors',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'true',
            'Access-Control-Allow-Credentials':'true'
            }
        
    })
}

export  const userLogin=(authRequest)=>{
    return axios({
        method:'POST',
        url:`http://localhost:8080/api/v1/registration`,
        data :authRequest
    })
}

export const fetchUserData=(authRequest)=>{
    console.log(getToken());
    const t = getToken();
    return axios({
        method:'GET',
        url:`http://localhost:8080/api/v1/registration/confirm`,
        params:{token:t},
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'true'
            }
    })
}