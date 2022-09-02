import React, { useState } from "react";
import { Container, DivSaldo, Main, MainContainer, SaldoText, SaldoTotalText } from "./components/GlobalComponents";
import TabNav from "./components/TabNav";
import Despesas from "./pages/Despesas";
import Receita from "./pages/Receita";


const App = () => {
  const [activeDespesa, setActiveDespesa] = useState(true);
  const [activeReceita, setActiveReceita] = useState(false);


  function handleClickTabDespesa() {
    if (!activeDespesa) {
      setActiveDespesa(true)
    }
  }
  function handleClickTabReceita() {
    if (activeDespesa) {
      setActiveDespesa(false)
      setActiveReceita(true)
    }
  }

  let borderDespesa = '';
  let borderReceita = '';

  let fontDespesa = 200;
  let fontReceita = 200;

  { activeDespesa ? borderDespesa = '4px solid #B0298B' : borderReceita = '4px solid #B0298B' }
  { activeDespesa ? fontDespesa = 500 : fontReceita = 500 }

  return (
    <Container>
      <MainContainer>
        <Main>
        <DivSaldo >
            <SaldoText>R$ </SaldoText>
            <SaldoTotalText>saldo atual</SaldoTotalText>
        </DivSaldo>
          <TabNav onClickDespesas={handleClickTabDespesa} onClickReceita={handleClickTabReceita} borderBottomDespesa={borderDespesa} borderBottomReceita={borderReceita} fontDespesa ={fontDespesa} fontReceita={fontReceita}/>
                    {activeDespesa ? <Despesas /> : <Receita/>}
                    <div style={{height: '200px'}}></div>
        </Main>
      </MainContainer>
    </Container>
  )
}



export default App;