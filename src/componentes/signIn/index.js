import React from 'react'
import axios from 'axios'
import  { Link , useNavigate }  from  'react-router-dom' ;
import  {  useState, useContext }  from  "react" ;
import {Container, TextBox, Button, LinkSignUp} from "./style"

import UserContext from '../../context/UserContext';

export default function SingIn(){
    const {setData} = useContext(UserContext)
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })


    function changeInput(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
          }) 
    }

    function clearInput(){
        setLogin({
            email: '',
            password: ''
        })
    }

    function Logar(event){ 
        event.preventDefault();

        const promise = axios.post('http://localhost:5000/signIn', login)
       
        promise.then(res => {            
            setData(res.data) 
            navigate ("/extract")         
        })

        promise.catch(erro => {
            console.log(erro)
            alert("Email ou senha incorretos!")
            clearInput()
        })        
    }

    return (
        <form onSubmit={Logar}>

        <Container>
            <h1>My Wallet</h1>
                  
            <TextBox name="email" type="email" placeholder="E-mail" value = {login.email} onChange={changeInput}  required  />
            <TextBox name="password" type="password" placeholder="Senha" value = {login.password} onChange={changeInput} required />
            
            <Button onClick={Logar}>Entrar</Button>
                        
            <Link to = '/signUp'>
                <LinkSignUp>Primeira vez? Cadastre-se!</LinkSignUp>
            </Link>
            
        </Container>

        </form> 
    
    )
}

