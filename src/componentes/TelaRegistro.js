import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from "styled-components"
import dayjs from 'dayjs';
import axios from 'axios';

import UserContext from '../context/UserContext'



export default function TelaRegistro(){
    const navigate = useNavigate()
    const { typeRecord } = useParams();
    const { dados } = useContext(UserContext);
    const token = dados.token
    const [record, setRecord] = useState({
        value: '',
        description: '',
        date: dayjs().format('DD/MM'),
        type: typeRecord,
    });

    function MudancaDoInput(e){
        setRecord({
            ...record,
            [e.target.name]: e.target.value,
          })
    }

  
    
    function novoRegistro(event){
        event.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        const promise = axios.post('http://localhost:5000/record', record, config)
        promise.then(()=>{
            setRecord({
                ...record,
                value: '',
                description: '',
            });
            navigate('/extrato');
        })

        promise.catch((err)=>{
            console.log(err)
        })
        
    }       
       

    return (
        <form onSubmit={novoRegistro}>
        <Container>
            <Topo>
                {typeRecord === 'incoming' ? (
                    <h1>Nova Entrada</h1>
                ) : (
                    <h1>Nova Saída</h1>
                )}
            </Topo>
            <Formulario>
                <CaixaDeTexto name="value" type="number" placeholder="Valor" value = {record.value} onChange={MudancaDoInput} required />
                <CaixaDeTexto name="description" type="text" placeholder="Descrição" value = {record.description} onChange={MudancaDoInput} required />

                {typeRecord === 'incoming' ? (

                    <button onClick = {novoRegistro}>Salvar Entrada</button>

                ) : (
                    <button onClick = {novoRegistro}>Salvar Saída</button>
                )}
            </Formulario>


        </Container>


        
        </form>
    );
}

const Container = styled.div ``
const Topo = styled.div ``
const Formulario = styled.div ``
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
