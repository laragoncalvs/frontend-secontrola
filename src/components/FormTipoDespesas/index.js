import React from "react";
import { Button, Input, InputLabelContainer, InputsContainer, Label } from "../FormComponents";

const FormTipoDespesas = ({type, setType, goal, setGoal, handleSubmitType, classNameForm}) => {
    return (
        <form onSubmit={handleSubmitType} className={classNameForm}>
        <InputsContainer>
            <InputLabelContainer style={{ width: '33%' }}>
                <Label>Tipo</Label>
                <Input style ={{height: '0.1rem'}} type='text' value={type} onChange={e => setType(e.target.value)} placeholder= "Lazer..."/>
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