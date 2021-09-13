import "./ExpenseItem.css";

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>September 13th 2021</div>
            <div className="expense-item__description">
                <h2>Shopping</h2>
                <div className="expense-item__price">€ 50</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
