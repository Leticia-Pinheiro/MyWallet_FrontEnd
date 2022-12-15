import styled from "styled-components";

const Buttons = styled.div `
margin-top: 13px;
width: 326px;
display: flex;
justify-content: space-between;`

const Button = styled.div `
width: 155px;
height: 114px;
cursor: pointer;
background: #A328D6;
border-radius: 5px;
display: flex;
flex-direction: column;
align-items: left;
justify-content: space-between;  
color: #ffffff;  
ion-icon{           
    font-size: 25px;
    padding: 10px;
}
span{        
    width: 64px;
    height: 40px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;        
    padding: 10px;
}`

export { Buttons, Button }