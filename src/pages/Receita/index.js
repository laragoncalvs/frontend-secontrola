import React from "react";
import FormReceita from "../../components/FormReceita";
import { Text } from "../../components/GlobalComponents";
import TableReceita from "../../components/TableReceita";
import api from "../../services/api";
const Receita = ({allIncomes, name, setName, income, setIncome, incomeDate, setIncomeDate, setAllIncomes}) => {

    async function handleSubmitIncomes(e) {
        e.preventDefault();
  
        const res = await api.post('/incomes', {
            name,
            income,
            incomeDate
        })
  
        setName('');
        setIncome('');
        setIncomeDate('');
  
        setAllIncomes([...allIncomes, res.data])
    }

    function sumIncomes(array) {
        var soma = 0
        for (var i = 0; i < array.length; i++) {
          soma += array[i].income
        }
        return soma;
      }
  
    return (
        <div style={{width: '100%'}}>
            <Text>Novo faturamento</Text>
            <FormReceita
                handleSubmitReceita={handleSubmitIncomes}
                name={name}
                setName={e => setName(e.target.value)}
                income={income}
                setIncome={e => setIncome(e.target.value)}
                incomeDate={incomeDate}
                setIncomeDate={e => setIncomeDate(e.target.value)}
            />
            <div style={{display: 'flex', flexDirection: 'row', justifyContent:'space-between'}}>

            <Text>Minha receita</Text>
            <Text>R$ {sumIncomes(allIncomes).toString().replace('.', ',')}</Text>
            </div>
            <TableReceita
                allIncomes={allIncomes}
                setAllIncomes={setAllIncomes}
            />
        </div>
    )
}


export default Receita;