import { Container } from '../components/container';
import { MyWallet } from '../components/MyWallet';
import { Input } from '../components/input';
import { LinkPage } from '../components/linkPage';
import { Button } from '../components/button';


export default function SignInLayout({ Logar, ChangeInput, login }){
    
    return (
        <Container>
            <MyWallet>My Wallet</ MyWallet>
                  
            <Input name="email" type="email" placeholder="E-mail" value = {login.email} onChange={ChangeInput}  required  />
            <Input name="password" type="password" placeholder="Senha" value = {login.password} onChange={ChangeInput} required />
            
            <Button onClick={Logar}>Entrar</Button>           
                
            <LinkPage to = '/signUp'>Primeira vez? Cadastre-se!</LinkPage>       
        </Container>
    )
}