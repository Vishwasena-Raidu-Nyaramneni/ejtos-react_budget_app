import React, { useContext } from 'react';
/*import { TiDelete } from 'react-icons/ti';*/
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><button style={{
          border: 'none',
          background: 'none',
          padding: 0,
          outline: 'none'
        }} onClick={event=> increaseAllocation(props.name)}><img className='logo' style={{border:'none', padding:0}} src='plus.png' height={30} width={30} alt='Increase'/></button></td>
        <td><button style={{
          border: 'none',
          background: 'none',
          padding: 0,
          outline: 'none'
        }} onClick={handleDeleteExpense}><img src='minus.jpg' height={30} width={30} alt='Decrease'/></button></td>
        {/*<td><TiDelete size='1.5em' onClick={handleDeleteExpense}><img src='minus.jpg' alt='Delete'/></TiDelete></td>*/}
        </tr>
    );
};

export default ExpenseItem;
