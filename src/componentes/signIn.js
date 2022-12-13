import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { Link , useNavigate }  from  'react-router-dom' ;
import  {  useState, useContext }  from  "react" ;

import UserContext from '../context/UserContext';

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
            
            <Entrar onClick={Logar}>Entrar</Entrar>
                        
            <Link to = '/signUp'>
                <LinkCadastro>Primeira vez? Cadastre-se!</LinkCadastro>
            </Link>
            
        </Container>

        </form> 
    
    )
}

const Container = styled.div `
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;  
        
        h1{
            font-family: 'Saira Stencil One';
            font-style: normal;
            font-weight: 400;
            font-size: 32px;
            line-height: 50px;
            color: #ffffff;            
            margin-bottom: 42px;
            text-align: center;
        }
       `   

      

    const TextBox = styled.input `
        margin-bottom: 16px;
        box-sizing: border-box;    
        width: 299px;
        height: 52px;
        background: #FFFFFF;   
        border-radius: 8px;
        border: none;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;       
        ::placeholder{
            color:#7E7E7E;
        }`

    const Entrar = styled.button `
        border: none;
        margin-top: 8px;
        margin-bottom: 24px;        
        
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 26px;
        text-align: center;
        color: #FFFFFF;
        
        display: flex;        
        justify-content: center;
        align-items: center;
        padding: 18px 122px;
        gap: 10px;        
        width: 298px;
        height: 52px;
        background: #A328D6;
        border-radius: 8px;`    

    const LinkCadastro = styled.span `              
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;        
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;`