import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import {AiFillCheckCircle, AiFillMinusCircle, AiFillPlusCircle} from "react-icons/ai";
const ExpenseItem = (props) => {
    const { currency, dispatch } = useContext(AppContext);
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
    const reduceAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'REDUCE_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><AiFillPlusCircle className="text-success" size='1.7em' onClick={()=> increaseAllocation(props.name)}></AiFillPlusCircle></td>
            <td><AiFillMinusCircle className="text-danger" size='1.7em' onClick={() => reduceAllocation(props.name)}></AiFillMinusCircle></td>
        </tr>
    );
};
export default ExpenseItem;
