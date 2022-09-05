import React from "react";
import api from "../../services/api";
import { Button, Input, InputLabelContainer, InputsContainer, Label } from "../FormComponents";

const FormTipoDespesas = ({expenseType, setExpenseType, goal, setGoal, classNameForm, allExpensesTypes, setAllExpensesTypes}) => {

    async function handleSubmitType(e) {
        e.preventDefault();
  
        const res = await api.post('/expensestypes', {
            expenseType,
            goal
        })
  
        setExpenseType('');
        setGoal('');
        setAllExpensesTypes([...allExpensesTypes, res.data])
  
    }




    return (
        <form onSubmit={handleSubmitType} className={classNameForm}>
        <InputsContainer>
            <InputLabelContainer style={{ width: '33%' }}>
                <Label>Tipo</Label>
                <Input style ={{height: '0.1rem'}} type='text' value={expenseType} onChange={e => setExpenseType(e.target.value)} placeholder= "Lazer..."/>
            </InputLabelContainer>
            <InputLabelContainer style={{ width: '25%' }}>
                <Label>Meta</Label>
                <Input style ={{height: '0.1rem'}} placeholder='R$150,00' type='number' step='any' value={goal} onChange={e => setGoal(e.target.value)} />
            </InputLabelContainer>
            <Button style={{ width: '36%', height: '10%', background: 'transparent' }} type='submit'>Adicionar</Button>
        </InputsContainer>
        </form>
    )
}


export default FormTipoDespesas;