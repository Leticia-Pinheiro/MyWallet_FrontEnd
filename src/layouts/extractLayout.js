import { Container } from '../components/container';
import { Title } from '../components/title';
import { Screen } from '../components/extract/screenRecords';
import { Records, Record, Message, Data, Description, Value, Total } from '../components/extract/records';
import { Buttons, Button } from '../components/extract/buttons';
import { useNavigate } from 'react-router-dom'



export default function ExtractLayout({name, logOut, records, DeleteRecord, conta, total, typeRecord }){
    const navigate = useNavigate()

    return(
        <Container>
            <Title>
                <span>Olá, {name}</span>
                <ion-icon name="log-out-outline" onClick={logOut}></ion-icon>
            </Title>

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