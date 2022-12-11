import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;
import  {  useState  }  from  'react' ;
import "./assets/style/reset.css"
import "./assets/style/style.css"

import SignIn from "./componentes/signIn"
import SignUp from "./componentes/signUp"
import TelaExtrato from "./componentes/TelaExtrato"
import TelaRegistro from "./componentes/TelaRegistro"
import UserContext from "./context/UserContext"

export default function App(){
    const [data, setData]= useState({})

    return(
    <UserContext.Provider value = {{data, setData}}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/extract" element={<TelaExtrato />} />
            <Route path="/record/:typeRecord" element={<TelaRegistro />} />            
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>

    )
}