import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseDisplay from "./components/Expenses/ExpenseDisplay";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Bday Dinner",
            amount: 100,
            date: new Date(2020, 2, 1),
        },
        {
            id: "e2",
            title: "Baby stroller",
            amount: 500,
            date: new Date(2021, 3, 20),
        },
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

    const addExpenseHandler = (expense) => {
        console.log("In App.js");
        console.log(expense);
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <ExpenseDisplay items={expenses} />
        </div>
    );
}

export default App;
