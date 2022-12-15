import styled from "styled-components";

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

const TextBox = styled.input `
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

const RegisterButton = styled.button `
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

export {Container, TextBox, RegisterButton, LinkLogin}