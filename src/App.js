import  {  BrowserRouter ,  Routes ,  Route  }  from  'react-router-dom' ;
import  {  useState  }  from  'react' ;
import "./assets/style/reset.css"
import "./assets/style/style.css"

import SignIn from "./pages/signInPage"
import SignUp from "./pages/signUpPage"
import Extract from "./pages/extract/index"
import Records from "./pages/records/index"
import UserContext from "./context/UserContext"

export default function App(){
    const [data, setData]= useState({})

    return(
    <UserContext.Provider value = {{data, setData}}>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/extract" element={<Extract />} />
            <Route path="/record/:typeRecord" element={<Records />} />            
        </Routes>
    </BrowserRouter>
    </UserContext.Provider>

    )
}