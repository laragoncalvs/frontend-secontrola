import React, { useEffect, useState } from "react";
import ButtonsDespesas from "../../components/ButtonsDespesas";
import FormDespesas from "../../components/FormDespesas";
import { Text } from "../../components/GlobalComponents";
import api from "../../services/api";
import db from '../../db.json'
import styled from "styled-components";
import FormTipoDespesas from "../../components/FormTipoDespesas";
import { FiPlusSquare } from "react-icons/fi";


const ButtonsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    justify-content: space-between 

    `

const ContainerDespesas = styled.div`
width: 100%;
justify-content: space-between;

`

const Despesas = () => {

    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('close')

    function handleClick() {
        if (!active) {
            setActive(true)
            setClassName('open')
        } else {
            setActive(false)
            setClassName('close')
        }
    }
    

    const [allExpenses, setAllExpenses] = useState([])
    const [allExpensesTypes, setAllExpensesTypes] = useState([])

    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [expense, setExpense] = useState();

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await api.post('/expenses', {
            type,
            description,
            expense,
            date
        })

        setType('');
        setDescription('');
        setDate('');
        setExpense();

        setAllExpenses([...allExpenses, res.data])

    }

    function sumExpense(array) {
        var soma = 0
        for (var i = 0; i < array.length; i++) {
            soma += array[i].expense
        }
        return soma;
    }

    function sumGoal(array) {
        var soma = 0
        for (var i = 0; i < array.length; i++) {
            soma += array[i].goal
        }
        return soma;
    }



    async function getAllExpenses() {
        const res = await api.get('/expenses')

        setAllExpenses(res.data)
    }

    async function getAllExpensesTypes() {
        const res = await api.get('/expensestypes')

        setAllExpensesTypes(res.data)
    }

    async function handleDelete(id) {
        const res = await api.delete(`/expenses/${id}`)

        if (res) {
            setAllExpenses(allExpenses.filter(n => n._id !== id))
        }

    }

    function filterList(tipo) {
        return allExpenses.filter(data => (data.type === tipo))
    }

    useEffect(() => {
        getAllExpenses();
        getAllExpensesTypes();
    }, [])

    return (
        <>


            <ContainerDespesas>
                <Text>Nova despesa</Text>
                <FormDespesas
                    handleSubmitFormDespesas={handleSubmit}
                    type={type}
                    onChangeType={e => setType(e.target.value)}
                    allExpensesTypes={allExpensesTypes}
                    description={description}
                    onChangeDescription={e => setDescription(e.target.value)}
                    date={date}
                    onChangeDate={e => setDate(e.target.value)}
                    expense={expense}
                    onChangeExpense={e => setExpense(e.target.value)}
                />
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{marginBottom: '15px'}}>Minhas despesas</Text>
                    <Text style={{marginBottom: '15px'}}>R$ {sumExpense(allExpenses).toString().replace('.', ',')}</Text>
                </div>
                <button style= {{background: 'transparent', border: 0, cursor: 'pointer'}} onClick={handleClick}>
                <Text style={{fontSize: '18px', marginTop: 0, fontWeight: '100', display: 'flex', alignItems:'center'}}>Adicionar novo tipo despesa <FiPlusSquare opacity='0.7'/> </Text>

                </button>
                <FormTipoDespesas
                    classNameForm={className}
                />
                <ButtonsContainer>
                    {
                    allExpensesTypes.map(
                            element => (
                    <ButtonsDespesas
                        background={db.backgrounds[allExpensesTypes.indexOf(element)]}
                        goal={element.goal}
                        tipoDespesa={element.type}
                        tipo={element.type}
                        totalExpenses={
                            (allExpensesTypes.map(element => filterList(element.type)).map(data => sumExpense(data))[allExpensesTypes.indexOf(element)]).toFixed(2)
                        }
                        balance={
                            (element.goal - allExpensesTypes.map(element => filterList(element.type)).map(data => sumExpense(data))[allExpensesTypes.indexOf(element)]).toFixed(2)
                        }
                        backgroundTable={db.backgroundsTables[allExpensesTypes.indexOf(element)]}
                        allExpenses={allExpenses}
                        handleDelete={handleDelete}
                    />
                    ))}

                </ButtonsContainer>

                <Text>Meta: R$ {sumGoal(allExpensesTypes)}</Text>
            </ContainerDespesas>



        </>

    )
}


export default Despesas;