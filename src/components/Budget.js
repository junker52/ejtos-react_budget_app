import React, {useContext} from 'react';
import {AppContext} from '../context/AppContext';

const Budget = () => {
    const {budget, currency, expenses, dispatch} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const updateValue = (budget) => {
        if (budget > 20000) {
            window.alert('Your budget cannot exceed £20.000');
            return;
        }
        if (budget < totalExpenses) {
            window.alert(`Your budget cannot be lower than your expenses: £${totalExpenses}`);
            return;
        }
        const action = {type: 'SET_BUDGET', payload: budget};
        dispatch(action);
    }

    return (<div className='alert alert-secondary'>
            <span>Budget: </span><span>{currency}</span>
            <input
                className="w-50"
                value={budget}
                onChange={event => updateValue(event.target.value)}
                type="number" step="10"/>
        </div>);
};
export default Budget;
