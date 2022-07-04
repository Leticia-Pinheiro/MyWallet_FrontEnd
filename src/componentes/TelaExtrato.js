import React from 'react'
import styled from "styled-components"
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react" 

import UserContext from './context/UserContext'

export default function TelaExtrato(){

    const navigate = useNavigate();
    const {dados} = useContext(UserContext)
    const token = dados.token
    const typeRecord = ['incoming', 'outgoing'] 
    const [records, setRecords] = useState([])
    const [total, setTotal] = useState(0)
    
    
    useEffect(()=>{
        const config = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }

        const promise = axios.get('http://localhost:5000/records', config)
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
                <span>Olá, {dados.name}</span>
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
                        
                            <span>Não há registros de entrada ou saída</span>
                        
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
        justify-content: center;        
       `   
const Topo = styled.div ``

const Registros = styled.div `
        width: 326px;
        height: 446px;
        background: #FFFFFF;
        border-radius: 5px;`

const Registro = styled.div ``

const Data = styled.span ``

const Descricao = styled.span ``

const Total = styled.div ``

const Botoes = styled.div `
        display: flex;`

const Botao = styled.div `
        width: 155px;
        height: 114px;
        background: #A328D6;
        border-radius: 5px;`