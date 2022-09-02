import React from "react";

const Teste = ({allExpenses, type, description, date, expense, setType, setDescription, setExpense, setDate, handleSubmit}) => {



    return (
        <>


        {
            allExpenses.map(
                data => (
                    <div>{data.description}</div>
                )
            )
        }
        <form onSubmit={handleSubmit}>

        <input value={type} onChange={setType}/>
        <input value={description} onChange={setDescription}/>
        <input value={expense} onChange={setExpense}/>
        <input value ={date} type='date' onChange={setDate}/>
        <button type='submit'>Enviar</button>
        </form>
        </>
    )
}

export default Teste;