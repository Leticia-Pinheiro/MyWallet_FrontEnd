import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import RecordsLayout from '../layouts/recordsLayout';
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

    function ChangeInput(e){
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
            <RecordsLayout typeRecord={typeRecord} BackToExtract={BackToExtract} record={record} ChangeInput={ChangeInput} newRecord={newRecord}/>
        </form>
    )
}

