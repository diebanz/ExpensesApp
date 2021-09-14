import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
    const saveExpenseDateHandler = (enteredExpenseDate) => {
        const expenseDate = {
            ...enteredExpenseDate,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseDate);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseDate={saveExpenseDateHandler} />
        </div>
    );
}

export default NewExpense;
