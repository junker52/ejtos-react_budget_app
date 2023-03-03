import {useContext, useState} from "react";
import {AppContext} from "../context/AppContext";
import './CurrencyDropdown.css';

export const CurrencyDropdown = () => {
    const {currency, dispatch} = useContext(AppContext);
    const [opened, setOpened] = useState(false);
    const availableCurrencies = [
        {symbol: '£', name: 'Pound'},
        {symbol: '€', name: 'Euro'},
        {symbol: '$', name: 'Dollar'},
        {symbol: '₹', name: 'Ruppee'},
    ];

    const updateCurrency = (cur) => {
        const action = {type: 'CHG_CURRENCY', payload: cur};
        dispatch(action);
        setOpened(false);
    }

    return (
        <div className="dropdown w-100">
            <button className="btn w-100 btn-secondary dropdown-toggle drpdown-button" type="button" onClick={() => setOpened(!opened)}>
                Currency ({currency})
            </button>
            <div className={`dropdown-menu drpdown w-100 ${opened ? 'show' : ''}`} aria-labelledby="dropdownMenuButton">
                { availableCurrencies.map(cur => <a className="dropdown-item drpdown-item" onClick={() => updateCurrency(cur.symbol) }>{cur.symbol} - {cur.name}</a>)}
            </div>
        </div>
    )
}