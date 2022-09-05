import React, { useEffect, useState } from "react";
import { Container, DivSaldo, Main, MainContainer, SaldoText, SaldoTotalText } from "./components/GlobalComponents";
import TabNav from "./components/TabNav";
import Despesas from "./pages/Despesas";
import Receita from "./pages/Receita";
import api from "./services/api";


const App = () => {
  const [activeDespesa, setActiveDespesa] = useState(true);
  const [activeReceita, setActiveReceita] = useState(false);

  const [expenseType, setExpenseType] = useState('')
  const [goal, setGoal] = useState();

  const [allExpenses, setAllExpenses] = useState([])
  const [allExpensesTypes, setAllExpensesTypes] = useState([])
  const [allIncomes, setAllIncomes] = useState([]);

  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [expense, setExpense] = useState('');

  const [name, setName] = useState('');
  const [income, setIncome] = useState();
  const [incomeDate, setIncomeDate] = useState('');




  function sumIncomes(array) {
    var soma = 0
    for (var i = 0; i < array.length; i++) {
      soma += array[i].income
    }
    return soma;
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

  async function getAllIncomes() {
    const res = await api.get('/incomes')
    setAllIncomes(res.data)
  }


  async function getAllExpenses() {
    const res = await api.get('/expenses')

    setAllExpenses(res.data)
  }

  async function getAllExpensesTypes() {
    const res = await api.get('/expensestypes')

    setAllExpensesTypes(res.data)
  }


  useEffect(() => {
    getAllExpenses();
    getAllExpensesTypes();
    getAllIncomes()
  }, [])

  return (
    <Container>
      <MainContainer>
        <Main>
          <DivSaldo >
            <SaldoText>R$ {(sumIncomes(allIncomes) - sumExpense(allExpenses)).toFixed(2).toString().replace('.', ',')}</SaldoText>
            <SaldoTotalText>saldo atual</SaldoTotalText>
          </DivSaldo>
          <TabNav
            setActiveDespesa={setActiveDespesa}
            setActiveReceita={setActiveReceita}
            activeDespesa={activeDespesa} />

          {activeDespesa ? <Despesas
            allExpenses={allExpenses}
            allExpensesTypes={allExpensesTypes}
            type={type}
            setType={setType}
            description={description}
            setDescription={setDescription}
            date={date}
            setDate={setDate}
            expense={expense}
            setExpense={setExpense}
            sumExpense={sumExpense}
            sumGoal={sumGoal}
            setAllExpenses={setAllExpenses}
            goal={goal}
            setGoal={setGoal}
            expenseType={expenseType}
            setExpenseType={setExpenseType}
            setAllExpensesTypes={setAllExpensesTypes}



          /> : <Receita
            allIncomes={allIncomes}
            setAllIncomes={setAllIncomes}
            name={name}
            setName={setName}
            income={income}
            setIncome={setIncome}
            incomeDate={incomeDate}
            setIncomeDate={setIncomeDate}
            sumIncomes={sumIncomes}
          />}
          <div style={{ height: '200px' }}></div>
        </Main>
      </MainContainer>
    </Container>
  )
}



export default App;