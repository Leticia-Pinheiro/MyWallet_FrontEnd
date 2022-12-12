import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import dayjs from 'dayjs';
import axios from 'axios';

import UserContext from '../context/UserContext'

export default function Records(){

    const navigate = useNavigate();
    const { typeRecord } = useParams();
    const { data } = useContext(UserContext);
    const {token, id} = data
    const [record, setRecord] = useState({
        userId: id,
        value: '',
        description: '',
        date: dayjs().format('DD/MM'),
        type: typeRecord        
    });

    function chengeInput(e){
        setRecord({
            ...record,
            [e.target.name]: e.target.value,
        })
    }

  
    
    function newRecord(event){
        event.preventDefault()

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        }

        const promise = axios.post('http://localhost:5000/record', {...record, value:Number(record.value)}, config)
        promise.then(()=>{
            setRecord({
                ...record,
                value: '',
                description: '',
            });
            navigate('/extract');
        })

        promise.catch((err)=>{
            console.log(err)
        })
        
    }       
       

    return (
        <form onSubmit={newRecord}>
        <Container>
            <Top>
                {typeRecord === 'incoming' ? (
                    <span>Nova Entrada</span>
                ) : (
                    <span>Nova Saída</span>
                )}
            </Top>
            <Form>
                <TextBox name="value" type="number" placeholder="Valor" value = {record.value} onChange={chengeInput} required />
                <TextBox name="description" type="text" placeholder="Descrição" value = {record.description} onChange={chengeInput} required />
                
                {typeRecord === 'incoming' ? (

                    <Button onClick = {newRecord}>Salvar Entrada</Button>

                ) : (
                    <Button onClick = {newRecord}>Salvar Saída</Button>
                )}
            </Form>


        </Container>


        
        </form>
    );
}

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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;       
    ::placeholder{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
        padding-left: 15px;
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