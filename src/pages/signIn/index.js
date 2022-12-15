import React from 'react'
import axios from 'axios'
import  { useNavigate }  from  'react-router-dom' ;
import  {  useState, useContext }  from  "react" ;
import SignInLayout from '../../layouts/signInLayout';

import UserContext from '../../context/UserContext';

export default function SingIn(){
    
    const {setData} = useContext(UserContext)
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        email: '',
        password: '',
    })


    function ChangeInput(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
          }) 
    }

    function ClearInput(){
        setLogin({
            email: '',
            password: ''
        })
    }

    function Logar(event){ 
        event.preventDefault();

        const promise = axios.post('http://localhost:5000/signIn', login)
       
        promise.then(res => {            
            setData(res.data) 
            navigate ("/extract")         
        })

        promise.catch(erro => {
            console.log(erro)
            alert("Email ou senha incorretos!")
            ClearInput()
        })        
    }   

    return (
        <form onSubmit={Logar}>
            <SignInLayout Logar={Logar} ChangeInput={ChangeInput} login={login} setLogin={setLogin} />
        </form>     
    )
}

