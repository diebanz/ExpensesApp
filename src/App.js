import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Bday Dinner",
        amount: 100,
        date: new Date(2020, 2, 1),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
        id: "e3",
        title: "Car",
        amount: 20000,
        date: new Date(2021, 6, 20),
    },
    {
        id: "e4",
        title: "Car Insurance",
        amount: 1000,
        date: new Date(2021, 7, 1),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseDisplay items={expenses} />
        </div>
    );
}

export default App;
