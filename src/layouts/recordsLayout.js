import { Title } from '../components/title';
import { Input } from '../components/input';
import { Button } from '../components/button';
import { Form } from '../components/records/form';
import { ContainerRecord } from '../components/records/containerRecord';

export default function RecordsLayout({typeRecord, BackToExtract, record, ChangeInput, newRecord}){
    return (
        <ContainerRecord>
            <Title>
                {typeRecord === 'incoming' ? (
                    <span>Nova Entrada</span>
                ) : (
                    <span>Nova Saída</span>
                )}
                <ion-icon name="arrow-undo-outline" onClick={BackToExtract}></ion-icon>

            </Title>
            <Form>
                <Input name="value" type="number" placeholder="Valor" value = {record.value} onChange={ChangeInput} required />
                <Input name="description" type="text" placeholder="Descrição" value = {record.description} onChange={ChangeInput} required />
                
                {typeRecord === 'incoming' ? (

                    <Button onClick = {newRecord}>Salvar Entrada</Button>

                ) : (
                    <Button onClick = {newRecord}>Salvar Saída</Button>
                )}
            </Form>


        </ContainerRecord>
    )
}