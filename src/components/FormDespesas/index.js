import React from "react";
import { Button, Input, InputLabelContainer, InputsContainer, Label, Select } from "../FormComponents";
import { Text } from "../GlobalComponents";

const FormDespesas = ({handleSubmitFormDespesas, type, onChangeType, allExpensesTypes, description, onChangeDescription, date, onChangeDate, expense, onChangeExpense}) => {

    

    return (
        <form onSubmit={handleSubmitFormDespesas}>
     
            <InputsContainer>
                <InputLabelContainer style={{ width: '33%' }}>
                    <Label>Tipo despesa</Label>
                    <Select value={type} onChange={onChangeType}>
                        <option>Selecione</option>
                    
                        {
                            allExpensesTypes.map(
                                data => (
                                    <option >{data.type}</option>
                                )
                            )
                        }
                    </Select>
                </InputLabelContainer>
                <InputLabelContainer style={{ width: '64%' }}>
                    <Label>Descrição</Label>
                    <Input placeholder='Compras supermercado...' type='text' value={description} onChange={onChangeDescription} />
                </InputLabelContainer>
            </InputsContainer>
            <InputsContainer>
                <InputLabelContainer style={{ width: '33%' }}>
                    <Label>Data</Label>
                    <Input type='date' value={date} onChange={onChangeDate} />
                </InputLabelContainer>
                <InputLabelContainer style={{ width: '25%' }}>
                    <Label>Valor</Label>
                    <Input placeholder='R$150,00' type='number' step='any' value={expense} onChange={onChangeExpense} />
                </InputLabelContainer>
                <Button style={{ width: '36%', height: '50%' }} type='submit'>Adicionar</Button>
            </InputsContainer>
        </form>
    )
}


export default FormDespesas;