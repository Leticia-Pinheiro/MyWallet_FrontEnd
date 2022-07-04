import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;
import  {  useState  }  from  'react' ;
import "./assets/reset.css"
import "./assets/style.css"

import TelaLogin from "./TelaLogin"
import TelaCadastro from "./TelaCadastro"
import TelaExtrato from "./TelaExtrato"
import TelaRegistro from "./TelaRegistro"
import UserContext from "./context/UserContext"

export default function App(){
    const [dados, setDados]= useState({})

    return(
    <UserContext.Provider value = {{dados, setDados}}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/signup" element={<TelaCadastro />} />
            <Route path="/extrato" element={<TelaExtrato />} />
            <Route path="/registro/:typeRecord" element={<TelaRegistro />} />            
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>

    )
}