import { Container } from '../components/container';
import { Input } from '../components/input';
import { LinkPage } from '../components/linkPage';
import { Button } from '../components/button';
import  { Link }  from  'react-router-dom' ;

export default function SignInLayout({Logar,  login, ChangeInput}){

    // function changeInput(e){
    //     setLogin({
    //         ...login,
    //         [e.target.name]: e.target.value,
    //       })         
    // }

    return (
        <Container>
            <h1>My Wallet</h1>
                  
            <Input name="email" type="email" placeholder="E-mail" value = {login.email} onChange={ChangeInput}  required  />
            <Input name="password" type="password" placeholder="Senha" value = {login.password} onChange={ChangeInput} required />
            
            <Button onClick={Logar}>Entrar</Button>
                        
            <Link to = '/signUp'>
                <LinkPage>Primeira vez? Cadastre-se!</LinkPage>
            </Link>
            
        </Container>
    )
}