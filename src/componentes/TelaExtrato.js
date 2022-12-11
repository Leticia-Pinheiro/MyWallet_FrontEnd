import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react" 

import UserContext from '../context/UserContext'

export default function TelaExtrato(){

    const navigate = useNavigate();
    const {data, setData} = useContext(UserContext)   
    const {token, id, name } = data
    // const userId = data.id
    // const token = data.token
    // const name = data.name

    const typeRecord = ['incoming', 'outgoing'] 
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)
    
    function logOut(){
        navigate('/')
        setData({
            name: '',
            email: '',            
            password: ''
        })
    }
    
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get(`http://localhost:5000/records/${id}`, config)
        promise.then(res => {
            setRecords(res.data)
        })

        promise.catch(err => {
            console.log(err)
        })

    },[])

    const conta = () => {
        let valorTotal = 0
        records.forEach((record) => {
            if (record.type === 'incoming') {
                valorTotal += parseFloat(record.value)
            } else {
                valorTotal -= parseFloat(record.value)
            }
        });
        return valorTotal
    };

    useEffect(() => {
        setTotal(conta())
    }, [records])


    return(
        <Container>
            <Topo>
                <span>Olá, {name}</span>
                <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>

            </Topo>
            <Registros>
            {records.length > 0 ? (
                        records.map((record) => (
                            <Registro type={record.type} key={record._id} >                             
                            
                                <div>
                                    <Data>{record.date}</Data>          
                                    <Descricao>{record.description}</Descricao>    
                                </div>

                                <div>
                                    <span>
                                        {parseFloat(record.value).toFixed(2).replace('.', ',')}
                                    </span>                                    
                                </div>
                            </Registro> 
                        ))
                    ) : (
                        
                            <Message>Não há registros de entrada ou saída</Message>
                        
                    )}
                    {records.length > 0 ? (
                    <Total conta ={total}>
                        
                            <h1>SALDO</h1>
                            <h2>R$ {total.toFixed(2).replace('.', ',')}</h2>
                        
                    </Total>
                ) : (
                    <Total />
                )}
            </Registros>
            <Botoes>
                
                <Botao onClick = {() => {navigate(`/registro/${typeRecord[0]}`)}}>
                    <span>Nova Entrada</span>
                </Botao>
                

                
                <Botao onClick = {() => {navigate(`/registro/${typeRecord[1]}`)}}>
                    <span>Nova Saída</span>
                </Botao>
                
            </Botoes>
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

const Topo = styled.div `
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

const Registros = styled.div `
    width: 326px;
    height: 446px;
    background: #FFFFFF;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`

const Registro = styled.div `
    display: flex;
    aling-items: center;
    justify-content: space-between;
    padding: 12px;`

const Message = styled.span`
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

const Descricao = styled.span `
    margin-left: 7px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #000000;`

const Total = styled.div `
    width: 326px;
    display: flex-direction;
    align-items: center;
    justify-content: space-around;
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
        
        color: #03AC00;
    }`

const Botoes = styled.div `
    margin-top: 13px;
    width: 326px;
    display: flex;
    justify-content: space-between;`

const Botao = styled.div `
    width: 155px;
    height: 114px;
    background: #A328D6;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 20px;`