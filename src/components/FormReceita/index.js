
import React from "react"
import { Button, Input, InputLabelContainer, InputsContainer, Label } from "../FormComponents";

const FormReceita = ({ handleSubmitReceita, name, setName, income, setIncome, incomeDate, setIncomeDate}) => {

    return (
        <div style={{ width: '100%' }}>
            <form onSubmit={handleSubmitReceita}>

                <InputsContainer>
                <InputLabelContainer style={{width: '40%'}}>

                    <Label>Descrição</Label>
                    <Input placeholder='Salário...' value={name} onChange={setName}/>
                </InputLabelContainer>
                <InputLabelContainer style={{width: '25%'}}>

                    <Label>Valor</Label>
                    <Input type='number' step='any' placeholder="R$ 1200,00"  value={income} onChange={setIncome} />
                </InputLabelContainer>
                <InputLabelContainer style={{width: '30%'}}>
                    <Label>Data</Label>
                    <Input  type='date'  value={incomeDate} onChange={setIncomeDate} />
                </InputLabelContainer>
                    
                </InputsContainer>
                <Button type='submit' style={{ width: '100%' }}>Adicionar</Button>
            </form>

        </div>
    )

}



export default FormReceita;