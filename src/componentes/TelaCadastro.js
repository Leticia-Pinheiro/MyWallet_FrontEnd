import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom' ;
import { useState } from "react" ;

export default function TelaCadastro(){
    const navigate = useNavigate()
    const [cadastro, setCadastro] = useState({
        email: '',
        name: '',
        password: '',
        passwordConfirm: ''
    })

    function MudancaDoInput(e){
        setCadastro({
            ...cadastro,
            [e.target.name]: e.target.value,
          })
    }

    function LimparInput(){
        setCadastro({
            email: '',
            name: '',
            password: '',
            passwordConfirm: ''
        })
    }
    
    function Cadastrar(event){
        event.preventDefault();

        if(cadastro.passwordConfirm === cadastro.password){
            const promise = axios.post('http://localhost:5000/sign-up', cadastro)
        
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
        <form onSubmit={Cadastrar}>
        <Container>
            <h1>My Wallet</h1>

            <CaixaDeTexto name="name" type="text" placeholder="Nome" value = {cadastro.name} onChange={MudancaDoInput} required />                     
            <CaixaDeTexto name="email" type="email" placeholder="E-mail" value = {cadastro.email} onChange={MudancaDoInput} required />
            <CaixaDeTexto name="password" type="password" placeholder="Senha" value = {cadastro.password} onChange={MudancaDoInput} required />
            <CaixaDeTexto name="passwordConfirm" type="password" placeholder="Confirme a senha" value = {cadastro.passwordConfirm} onChange={MudancaDoInput} required />
            
            <BotaoCadastrar onClick={Cadastrar}>Cadastrar</BotaoCadastrar>
                        
            <Link to = '/'>
                <LinkLogin>Já tem uma conta? Entre agora!</LinkLogin>
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
}`



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
font-size: 20px;       
::placeholder{
    color:#7E7E7E;
}`

const BotaoCadastrar = styled.button `
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

const LinkLogin = styled.span `        
     
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 15px;        
text-align: center;
text-decoration-line: underline;
color: #FFFFFF;`