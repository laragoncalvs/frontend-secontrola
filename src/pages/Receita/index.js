import React, { useEffect, useState } from "react";
import FormReceita from "../../components/FormReceita";
import { Text } from "../../components/GlobalComponents";
import TableReceita from "../../components/TableReceita";
import api from "../../services/api";

const Receita = () => {

    const [allIncomes, setAllIncomes] = useState([]);
    const [description, setDescription] = useState('');
    const [income, setIncome] = useState();
    const [date, setDate] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const res = await api.post('/incomes', {
            description,
            income,
            date
        })

        setDescription('');
        setIncome();
        setDate('');

        setAllIncomes([...allIncomes, res.data])
    }

    async function handleDelete(id) {
        const res = await api.delete(`/incomes/${id}`)

        if (res) {
            setAllIncomes(allIncomes.filter(n => n._id !== id))
        }

    }
    function sumExpense(array) {
        var soma = 0
        for (var i = 0; i < array.length; i++) {
            soma += array[i].income
        }
        return soma;
    }


    async function getAllIncomes() {
        const res = await api.get('/incomes')
        setAllIncomes(res.data)
    }

    console.log('rendeirizou')



    useEffect(() => {
        getAllIncomes()
    }, [])

    return (
        <div style={{width: '100%'}}>
            <Text>Novo faturamento</Text>
            <FormReceita
                handleSubmitReceita={handleSubmit}
                description={description}
                setDescription={e => setDescription(e.target.value)}
                income={income}
                setIncome={e => setIncome(e.target.value)}
                date={date}
                setDate={e => setDate(e.target.value)}
            />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>

            <Text>Minha receita</Text>
            <Text>R$ {sumExpense(allIncomes).toString().replace('.', ',')}</Text>
            </div>
            <TableReceita
                allIncomes={allIncomes}
                handleDelete={handleDelete}

            />
        </div>
    )
}


export default Receita;