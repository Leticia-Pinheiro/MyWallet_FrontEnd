import styled from "styled-components"

const Container = styled.div `
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;`  

const Top = styled.div `
width: 326px;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 22px;
span{
    color: #ffffff;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
}
ion-icon{
    cursor: pointer;
    color: #ffffff;
    font-size: 25px;
}`

const Screen = styled.div `
width: 326px;
height: 446px;
background: #FFFFFF;
border-radius: 5px;
position: relative;
`

const Records = styled.div`
width: 326px;
height: 400px;
overflow-y: scroll;`

const Record = styled.div `
display: flex;
aling-items: center;
justify-content: space-between;
padding: 12px;
`

const Message = styled.div`
width: 326px;
height: 446px;
display: flex;
align-items: center;
justify-content:center;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
text-align: center;
color: #868686;`

const Data = styled.span `
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #C6C6C6;
`

const Description = styled.span `
margin-left: 7px;
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: #000000;`

const Value = styled.span `
font-family: 'Raleway';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 19px;
text-align: right;
color: ${(props) => (props.type === 'incoming' ? '#03AC00' : '#C70000')};
ion-icon{
    color:#C6C6C6;
    font-size: 16px;
    padding-left:10px;
}`  
  

const Total = styled.div `
width: 310px;
padding: 12px;
display: flex;
align-items: center;
justify-content: space-between;
position: absolute;
bottom: 0;
padding: 10px;
h1{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    color: #000000;
}
h2{
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    
    color: ${(props) => (props.conta<0 ? '#C70000' : '#03AC00')};        
}`


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

export { Container, Top, Screen, Records, Record, Message, Data, Description, Value, Total, Buttons, Button } 