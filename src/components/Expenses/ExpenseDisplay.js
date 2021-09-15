import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./ExpenseDisplay.css";

function ExpenseDisplay(props) {
    const [filteredYear, setFilteredYear] = useState("2021");

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpenseFilter
                    selected={filteredYear}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />

                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))} */}
                {/* {filteredExpenses.length === 0 ? (
                    <p>No expenses found.</p>
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                )} */}
            </Card>
        </div>
    );
}

export default ExpenseDisplay;
