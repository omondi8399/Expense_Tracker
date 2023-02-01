import "./ExpenseItem.css" 

const ExpenseItem = (props) => {

    // const expenseDate = new Date(2023, 2, 1);
    // const expenseTitle = "Bar Insurance";
    // const expenseAmount = 300.32;

    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
        <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        </div>
    )
}

export default ExpenseItem
