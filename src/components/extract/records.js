import styled from "styled-components";

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

export { Records, Record, Message, Data, Description, Value, Total }