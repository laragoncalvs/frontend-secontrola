import styled from "styled-components"

const Button = styled.button`
    background: linear-gradient(268.38deg, #864275 5.07%, #254981 93.52%);
    box-shadow: 4px 4px 3px rgba(0, 0, 0, 0.15);
    border-radius: 25px;
    color: white;
    padding: 26px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    box-sizing: border-box;
    &:hover {
        opacity: 0.8;
        transition: 0.3s;
        cursor: pointer;
    }
    font-size: 20px
`

const InputLabelContainer = styled.div`
    display: flex;
    flex-direction: column;
`

const InputsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 35px;
    align-items: flex-end;
    @media (max-width: 768px){
        flex-direction: column;
        align-items: center
    }
    `

const Select = styled.select`
    background: #322C48;
    border-radius: 10px;
    padding: 30px 25px;
    color: white;
    border: 0; 
    `

const Label = styled.label`
    font-size: 24px;
    color: white;
    margin-bottom: 15px;
    font-weight: 200;
    `

const Input = styled.input`
    background: #322C48;
    border-radius: 10px;
    padding: 30px 25px;
    color: white;
    border:0;
    font-weight: 200;
    &::placeholder {
        color: white;
        opacity: 0.5;
        font-size: 14px;
    }
`


export { Button, InputsContainer, Label, Select, InputLabelContainer, Input }