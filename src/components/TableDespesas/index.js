import React from "react";
import { TableContainer, ThTable, TdTable } from "../TableComponents";
import { FiTrash } from "react-icons/fi";
import api from "../../services/api";


const TableDespesas = ({className, backgroundTable, tipo, allExpenses, setAllExpenses}) => {

    function filterList(tipo) {
        return allExpenses.filter(data => (data.type === tipo))
    }

    async function handleDelete(id) {
        const res = await api.delete(`/expenses/${id}`)
  
        if (res) {
            setAllExpenses(allExpenses.filter(n => n._id !== id))
        }
  
    }


    return (
        <div className={className}>

            <TableContainer style={{ backgroundColor: backgroundTable, position: 'relative', top: '-22px', borderRadius: '0 0 20px 20px' }}>
                <ThTable>Descrição</ThTable>
                <ThTable>Valor</ThTable>
                <ThTable>Data</ThTable>
                <ThTable></ThTable>
                {filterList(tipo).map(data => (< >
                    <TdTable >{data.description}</TdTable>
                    <TdTable >R$ {data.expense.toString().replace('.', ',')}</TdTable>
                    <TdTable >{data.date.replace('T00:00:00.000Z', '').replace('-', ' | ').replace('-', ' | ')}</TdTable>
                    <TdTable><button style={{ backgroundColor: 'transparent', border: '0', cursor: 'pointer' }}
                     onClick={() => handleDelete(data._id)}><FiTrash color='#aaa' /></button></TdTable>
                </>))}
                <div style={{ height: '15px' }}></div>
            </TableContainer>
        </div>
    )
}


export default TableDespesas