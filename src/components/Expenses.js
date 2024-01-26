import './Expenses.css'
import Card from './Card'
import ExpenseItem from './ExpenseItem'

function Expenses (props){
    return (
        <div className="expenses">
            <ExpenseItem expenseData={props.expenses[0]} />
            <ExpenseItem expenseData={props.expenses[1]} />
        </div>

    )
}

export default Expenses