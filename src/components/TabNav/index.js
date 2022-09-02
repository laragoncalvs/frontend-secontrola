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

const TabNav = ({onClickDespesas, onClickReceita, borderBottomDespesa, borderBottomReceita, fontDespesa, fontReceita }) => {
    return(
        <NavTab>
            <ButtonTab style={{borderBottom: borderBottomDespesa, }} onClick={onClickDespesas}><ButtonText style={{fontWeight: fontDespesa }}>Despesas</ButtonText></ButtonTab>
            <ButtonTab style={{borderBottom: borderBottomReceita, }} onClick={onClickReceita}><ButtonText style={{ fontWeight: fontReceita}}>Receita</ButtonText></ButtonTab>
        </NavTab>
    )
}

export default TabNav;