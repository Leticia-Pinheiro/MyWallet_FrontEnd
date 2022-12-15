import React from 'react'
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' 
import  {  useState, useContext, useEffect }  from  "react" 
import ExtractLayout from '../../layouts/extractLayout'
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
    }
    
    useEffect(() => {
        setTotal(conta())
    }, [records])


    return(        
        <ExtractLayout name={name} logOut={logOut} records={records} DeleteRecord={DeleteRecord} conta={conta} total={total} typeRecord={typeRecord}/>        
    )  
}

