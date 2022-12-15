import { Container } from '../components/container';
import { MyWallet } from '../components/MyWallet';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { LinkPage } from '../components/linkPage';

export default function SignUpLayout({Register, ChangeInput, userData}){

    return (
        <Container>
            <MyWallet>My Wallet</MyWallet>

            <Input name="name" type="text" placeholder="Nome" value = {userData.name} onChange={ChangeInput} required />                     
            <Input name="email" type="email" placeholder="E-mail" value = {userData.email} onChange={ChangeInput} required />
            <Input name="password" type="password" placeholder="Senha" value = {userData.password} onChange={ChangeInput} required />
            <Input name="confirmedPassword" type="password" placeholder="Confirme a senha" value = {userData.confirmedPassword} onChange={ChangeInput} required />
            
            <Button onClick={Register}>Register</Button>                       
            
            <LinkPage to = '/'>Já tem uma conta? Entre agora!</LinkPage>           
        </Container>
    )
}