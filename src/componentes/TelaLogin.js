import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { Link , useNavigate }  from  'react-router-dom' ;
import  {  useState, useContext }  from  "react" ;

import UserContext from './context/UserContext';

export default function TelaLogin(){
    const {setDados} = useContext(UserContext)
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })


    function MudancaDoInput(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
          }) 
    }

    function LimparInput(){
        setLogin({
            email: '',
            password: ''
        })
    }

    function Logar(event){ 
        event.preventDefault();

        const promise = axios.post('http://localhost:5000/sign-in', login)
       
        promise.then(res => {            
            setDados(res.data) 
            navigate ("/extrato")         
        })

        promise.catch(erro => {
            console.log(erro)
            alert("Email ou senha incorretos!")
            LimparInput()
        })        
    }

    return (
        <form onSubmit={Logar}>

        <Container>
            <span>My Wallet</span>
                  
            <CaixaDeTexto name="email" type="email" placeholder="E-mail" value = {login.email} onChange={MudancaDoInput}  required  />
            <CaixaDeTexto name="password" type="password" placeholder="Senha" value = {login.password} onChange={MudancaDoInput} required />
            
            <Entrar onClick={Logar}>Entrar</Entrar>
                        
            <Link to = '/signup'>
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
       `   

      

    const CaixaDeTexto = styled.input `
        margin-bottom: 16px;
        box-sizing: border-box;    
        width: 299px;
        height: 52px;
        background: #FFFFFF;   
        border-radius: 8px;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;       
        ::placeholder{
            color:#7E7E7E;
        }`

    const Entrar = styled.button `
        border: none;
        margin-top: 8px;
        margin-bottom: 24px;        
        
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
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
        background: #FF4791;
        border-radius: 8px;`    

    const LinkCadastro = styled.span `              
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;        
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;`