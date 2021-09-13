import ExpenseItem from "./components/ExpenseItem";

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
            <ExpenseItem
                title={expenses[0].title}
                amount={expenses[0].amount}
                date={expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[1].title}
                amount={expenses[1].amount}
                date={expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[2].title}
                amount={expenses[2].amount}
                date={expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
                title={expenses[3].title}
                amount={expenses[3].amount}
                date={expenses[3].date}
            ></ExpenseItem>
        </div>
    );
}

export default App;
