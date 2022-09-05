import React, { useState } from "react";
import TableDespesas from "../TableDespesas";
import './style.css'
import { FiChevronDown, FiChevronUp } from "react-icons/fi";


const ButtonsDespesas = ({ background, tipoDespesa, totalExpenses, goal, balance, filterList, setAllExpenses, backgroundTable, tipo, allExpenses }) => {

    const [active, setActive] = useState(false);
    const [className, setClassName] = useState('close')

    function handleClick() {
        if (!active) {
            setActive(true)
            setClassName('open')
        } else {
            setActive(false)
            setClassName('close')
        }
    }

    


    return (
        <div style={{ width: '98%' }}>

            <button type='button' style={{ width: '100%', background: background }} onClick={handleClick} className='btn-collapse'>
                <div className='type-total'>
                    <span> {tipoDespesa} </span>
                    <span>R$ {(totalExpenses).toString().replace('.', ',')}</span>
                </div>
                <div className='goal-balance'>

                    <div >
                        <span> Meta: </span>
                        <span>R$ {(goal).toString().replace('.', ',')}</span>
                        <span> |</span>
                        <span> Resta: </span>
                        <span>R$ {(balance).toString().replace('.', ',')}</span>
                    </div>
                    <div>
                        {!active ? <FiChevronDown /> : <FiChevronUp />}
                    </div>
                </div>
            </button>
            <TableDespesas allExpenses={allExpenses} className={className} filterList={filterList} setAllExpenses={setAllExpenses} backgroundTable={backgroundTable} tipo={tipo} />

        </div>
    )
}


export default ButtonsDespesas