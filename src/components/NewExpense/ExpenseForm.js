import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    //One state approach
    //useState({enteredTitle: "", enteredAmount: "", enteredDate: ""}) - passing an object instead of single string. But you need to update all three values

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);

        // //setUserInput((prevState) => {
        // return {...prevInput, enteredTitle:event.target.value};
        // })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{enteredTitle}</label>
                    <input type="text" onChange={titleChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{enteredAmount}</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={amountChangeHandler}
                    ></input>
                </div>
            </div>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>{enteredDate}</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}
                    ></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
