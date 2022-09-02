import styled from "styled-components";

const TableContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 0.8fr 1fr 0.1fr;
    justify-content: end;
`

const TdTable = styled.div`
    color: white;
    font-weight: 100;
    margin-bottom: 6px;
    border-top: solid 1px rgba(255, 255, 255, 0.1);
    padding: 5px 10px 0px 10px;
    font-size: 14px;
`

const ThTable = styled.div`
    color: white;
    font-weight: 300;
    margin-bottom: 9px;
    padding: 5px 10px 0px 10px;
    font-size: 15px;
    margin-top: 10px;

`


export {TableContainer, TdTable, ThTable};

