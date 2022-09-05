import React from "react";
import { TableContainer, TdTable, ThTable } from "../TableComponents";
import { FiTrash } from "react-icons/fi";
import api from "../../services/api";

const TableReceita = ({allIncomes, setAllIncomes}) => {

    async function handleDeleteIncomes(id) {
        const res = await api.delete(`/incomes/${id}`)
  
        if (res) {
            setAllIncomes(allIncomes.filter(n => n._id !== id))
        }
  
    }


    return (
        <div style={{ width: '100%' }}>


                <TableContainer style={{ backgroundColor: ' #322C48', borderRadius: '25px', padding: '30px', width: 'calc(100% - 60px)', marginBottom: '150px' }}>
                    <ThTable style={{ fontSize: '24px' , cursor: 'default'}}>Descrição</ThTable>
                    <ThTable style={{ fontSize: '24px' , cursor: 'default'}}>Valor</ThTable>
                    <ThTable style={{ fontSize: '24px', cursor: 'default' }}>Data</ThTable>
                    <ThTable></ThTable>
                    
                    {allIncomes.map(data => (
                    <>
                        <TdTable style={{ fontSize: '20px', cursor: 'default' }}>{data.name}</TdTable>
                        <TdTable style={{ fontSize: '20px', cursor: 'default' }}>R$ {data.income}</TdTable>
                        <TdTable style={{ fontSize: '20px', cursor: 'default' }}>{data.incomeDate.replace('T00:00:00.000Z', '').replace('T03:00:00.000Z', '').replace('-', ' | ').replace('-', ' | ')}</TdTable>
                        <TdTable style={{ fontSize: '18px', cursor: 'pointer' }}><button  style={{backgroundColor: 'transparent', border: '0', cursor: 'pointer'}} onClick={() => handleDeleteIncomes(data._id)}><FiTrash color='#aaa'/></button></TdTable>

                    </>
                    ))}

                </TableContainer>
            </div>
    )


}


export default TableReceita;