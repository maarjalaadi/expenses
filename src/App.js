import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const App = () => {
  const DYMMY_EXPENSES = [ 
  { 
    date: new Date(2023, 9, 6),
    title: 'New book',
    price: 30.99
  },
 {
  date: new Date(2023, 9, 6),
  title: 'New jeans',
  price: 99.99
 } 
]
const addExpenseHandler = (expense) =>{
  console.log('In App.js')
  console.log(expense)
}  
return (
  <div className="App">
     <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     <Expenses expenses={DYMMY_EXPENSES} />
  </div>
  );
}

export default App;
