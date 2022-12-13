import React from 'react';
import axios from 'axios';
import { Link , useNavigate} from 'react-router-dom';
import { useState } from "react";
import {Container, TextBox, RegisterButton, LinkLogin} from "./style"

export default function SignUp(){
    const navigate = useNavigate()
    const [userData, setUserData] = useState({
        name: '',
        email: '',        
        password: '',
        confirmedPassword: ''
    })   

    function MudancaDoInput(e){
        setUserData({
            ...userData,
            [e.target.name]: e.target.value,
          })
    }

    function LimparInput(){
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
                LimparInput()
            })
        }else{
            alert("Senhas não compatíveis!")
        }

        
        
    }


    return(
        <form onSubmit={Register}>
        <Container>
            <h1>My Wallet</h1>

            <TextBox name="name" type="text" placeholder="Nome" value = {userData.name} onChange={MudancaDoInput} required />                     
            <TextBox name="email" type="email" placeholder="E-mail" value = {userData.email} onChange={MudancaDoInput} required />
            <TextBox name="password" type="password" placeholder="Senha" value = {userData.password} onChange={MudancaDoInput} required />
            <TextBox name="confirmedPassword" type="password" placeholder="Confirme a senha" value = {userData.confirmedPassword} onChange={MudancaDoInput} required />
            
            <RegisterButton onClick={Register}>Register</RegisterButton>
                        
            <Link to = '/'>
                <LinkLogin>Já tem uma conta? Entre agora!</LinkLogin>
            </Link>
            
        </Container>       
        </form>
    )
    
}


