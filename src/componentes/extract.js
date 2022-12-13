import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react" 

import UserContext from '../context/UserContext'

export default function Extract(){
    const navigate = useNavigate();

    const {data, setData} = useContext(UserContext)   
    const {token, id, name } = data    

    const typeRecord = ['incoming', 'outgoing'] 
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }
    const API_URL = `http://localhost:5000/`


    

    function getRecords(){        

        const promise = axios.get(API_URL+`records/${id}`, config)
        promise.then(res => {
            setRecords(res.data)            
        })

        promise.catch(err => {
            console.log(err)
        })
    }

    useEffect(()=>{
        getRecords()
    },[])

    function DeleteRecord(id){   

        const promise = axios.delete(`http://localhost:5000/record/${id}`, config)
        promise.then(res => {
            getRecords()                         
        })
    
        promise.catch(err => {
            console.log(err)
        })          
    }
       
    function logOut(){
        navigate('/')
        setData({
            name: '',
            email: '',            
            password: ''
        })
    }  

    function conta() {
        let totalValue = 0
        records.forEach((record) => {
            if (record.type === 'incoming') {
                totalValue += parseFloat(record.value)
            } else {
                totalValue -= parseFloat(record.value)
            }
        });
        return totalValue
    };

    useEffect(() => {
        setTotal(conta())
    }, [records])


    return(
        <Container>
            <Top>
                <span>Olá, {name}</span>
                <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
            </Top>

            <Screen>
                <Records>
                {records.length > 0 ? (
                        records.map((record) => {
                        return(
                            <Record type={record.type} key={record.id} >                             
                            
                                <div>
                                    <Data >{record.date}</Data>          
                                    <Description >{record.description}</Description>    
                                </div>

                                <div>
                                    <Value type={record.type} >
                                        {parseFloat(record.value).toFixed(2).replace('.', ',')}
                                        <ion-icon name="close-outline" onClick = { () => DeleteRecord(record.id)}></ion-icon>
                                    </Value>                                    
                                </div>

                                
                            </Record> 
                        )})
                    ) : (
                        
                            <Message>Não há registros de entrada ou saída</Message>
                        
                    )}
                </Records>
            
                {records.length > 0 ? (
                    <Total conta = {total}>
                        
                            <h1>SALDO</h1>
                            <h2>R$ {total.toFixed(2).replace('.', ',')}</h2>
                        
                    </Total>
                ) : (
                    <Total />
                )}
            </Screen>
            <Buttons>
                
                <Button onClick = {() => {navigate(`/record/${typeRecord[0]}`)}}>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <span>Nova Entrada</span>
                </Button>
                

                
                <Button onClick = {() => {navigate(`/record/${typeRecord[1]}`)}}>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <span>Nova Saída</span>
                </Button>
                
            </Buttons>
        </Container>
    )
}

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