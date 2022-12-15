import React from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import { useState } from "react";
import SignUpLayout from '../layouts/signUpLayout';
import ExtractLayout from '../layouts/extractLayout';

export default function SignUp(){
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',        
        password: '',
        confirmedPassword: ''
    }) ;

    function ChangeInput(e){
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
          })
    }

    function ClearInput(){
        setUserData({
            name: '',
            email: '',            
            password: '',
            confirmedPassword: ''
        })
    }
    
    function Register(event){
        event.preventDefault();

        if(userData.confirmedPassword === userData.password){
            delete userData.confirmedPassword
            const promise = axios.post('http://localhost:5000/signUp', userData)
        
            promise.then(res => {
                console.log(res.data)
                navigate("/");
            })

            promise.catch(erro => {
                console.log(erro)
                alert("ERRO!")
                ClearInput()
            })
        }else{
            alert("Senhas não compatíveis!")
        }        
    }


    return(
        <form onSubmit={Register}>
            <SignUpLayout Register={Register} ChangeInput={ChangeInput} userData={userData}/>            
        </form>
        
    )    
}


