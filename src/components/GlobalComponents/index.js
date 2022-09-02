import styled from "styled-components";


const Container = styled.div`
    background: linear-gradient(218.93deg, #303461 2.03%, #2F2036 97.61%);
    display: flex;
    justify-content: center;
    width: 100vw;

`

const MainContainer = styled.div`
    width: 70%;
    background-color: #231E34;
    border-radius: 35px 35px 0 0;
    display: flex;
    justify-content: center;
    margin-top: 5%;
`

const Main = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Text = styled.div`
    font-weight: 300;
    font-size: 35px;
    color: white;
    margin-top: 100px;
    margin-bottom: 45px;

`
const DivSaldo = styled.div`
padding: 135px;
color: white;
display: flex;
flex-direction: column;
align-items: center
`
const SaldoText = styled.div`
    font-weight: 400;
font-size: 80px;
`
const SaldoTotalText = styled.div`
font-weight: 200;
font-size: 36px;
`

export { Container, Main, MainContainer, Text, DivSaldo, SaldoText, SaldoTotalText }