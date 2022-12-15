import React from 'react'
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react" 
import { Container, Top, Screen, Records, Record, Message, Data, Description, Value, Total, Buttons, Button } from "./style"
import UserContext from '../../context/UserContext'

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

