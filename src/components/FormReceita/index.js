
import React from "react"
import { Button, Input, InputLabelContainer, InputsContainer, Label } from "../FormComponents";
import { Text } from "../GlobalComponents";

const FormReceita = ({ handleSubmitReceita, description, setDescription, income, setIncome, date, setDate}) => {

    return (
        <div style={{ width: '100%' }}>
            <form onSubmit={handleSubmitReceita}>

                <InputsContainer>
                <InputLabelContainer style={{width: '40%'}}>

                    <Label>Descrição</Label>
                    <Input placeholder='Salário...' value={description} onChange={setDescription}/>
                </InputLabelContainer>
                <InputLabelContainer style={{width: '25%'}}>

                    <Label>Valor</Label>
                    <Input type='number' step='any' placeholder="R$ 1200,00"  value={income} onChange={setIncome} />
                </InputLabelContainer>
                <InputLabelContainer style={{width: '30%'}}>
                    <Label>Data</Label>
                    <Input  type='date'  value={date} onChange={setDate} />
                </InputLabelContainer>
                    
                </InputsContainer>
                <Button type='submit' style={{ width: '100%' }}>Adicionar</Button>
            </form>

        </div>
    )

}



export default FormReceita;