import React from "react";
import styled from "styled-components";


const NavTab = styled.nav`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const ButtonTab = styled.button`
    border: 0;
    background: none;
    font-size: 36px;
    font-weight: 100;
    color: white;
    cursor: pointer;
    padding-bottom: 25px; 
    border-bottom: 4px solid #3F3661; 
    width: 100% 

`

const ButtonText = styled.p`
    font-weight: 200;
`

const TabNav = ({ setActiveDespesa, setActiveReceita, activeDespesa }) => {


    let borderDespesa = '';
    let borderReceita = '';

    let fontDespesa = 200;
    let fontReceita = 200;

    { activeDespesa ? borderDespesa = '4px solid #B0298B' : borderReceita = '4px solid #B0298B' }
    { activeDespesa ? fontDespesa = 500 : fontReceita = 500 }

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

    return (
        <NavTab>
            <ButtonTab style={{ borderBottom: borderDespesa, }} onClick={handleClickTabDespesa}><ButtonText style={{ fontWeight: fontDespesa }}>Despesas</ButtonText></ButtonTab>
            <ButtonTab style={{ borderBottom: borderReceita, }} onClick={handleClickTabReceita}><ButtonText style={{ fontWeight: fontReceita }}>Receita</ButtonText></ButtonTab>
        </NavTab>
    )
}

export default TabNav;