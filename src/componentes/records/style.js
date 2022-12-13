import styled from 'styled-components';

const Container = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

const Top = styled.div`
width: 326px;
display: flex;
align-items: center;
justify-content: space-between;
margin: 25px 0 0 24px;
span{
    color: #ffffff;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
}
ion-icon{
    cursor: pointer;
    color: #ffffff;
    font-size: 25px;
    margin-right: 10px;
}`

const Form = styled.div `
margin: 40px 0 0 25px`

const TextBox = styled.input `
margin-bottom: 13px;
box-sizing: border-box;    
width: 326px;
height: 58px;
background: #FFFFFF;   
border-radius: 5px;
border: none;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px; 
color: #000000  
padding-left: 15px;   
::placeholder{        
    color:#7E7E7E;        
}`

const Button = styled.button`
width: 326px;
height: 46px;
left: 25px;
top: 238px;
border: none;
background: #A328D6;
border-radius: 5px;
color: #ffffff;
font-family: 'Raleway';
font-style: normal;
font-weight: 700;
font-size: 20px;
line-height: 23px;`

export { Container, Top, Form, TextBox, Button } 