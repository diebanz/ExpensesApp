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

    return (
        <div>
            <h2>Let's get started!</h2>
            <ExpenseDisplay items={expenses} />
        </div>
    );
}

export default App;
