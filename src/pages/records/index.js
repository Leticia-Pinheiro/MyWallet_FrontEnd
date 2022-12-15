import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Top, Form, TextBox, Button } from "./style"
import dayjs from 'dayjs';
import axios from 'axios';

import UserContext from '../../context/UserContext'

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

    function BackToExtract(){
        navigate('/extract');
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
                <ion-icon name="arrow-undo-outline" onClick={BackToExtract}></ion-icon>

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

