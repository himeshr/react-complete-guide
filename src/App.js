import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import {useState} from 'react';
import AddNewExpense from './components/NewExpense/AddNewExpense';

function App() {

  const expenses = [{
    id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2020, 7, 14),
  }, {
    id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12)
  }, {
    id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2021, 2, 28),
  }, {
    id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2021, 5, 12),
  },
  ];

  const [allExpenses, setAllExpenses] = useState(expenses);
  const [showAddExpense, setShowAddExpense] = useState(true);

  const expenseSaveHandler = (expense) => {
    console.log('In App', expense);
    setAllExpenses(prevState => {
      prevState.push(expense);
      return prevState;
    })
    cancelAddExpenseHandler();
  }

  const cancelAddExpenseHandler = () => {
    setShowAddExpense(true);
  }

  const showAddExpenseHandler = () => {
    setShowAddExpense(false);
  }

  return (
    <div>
      {showAddExpense ? <AddNewExpense onAddClick={showAddExpenseHandler}/>
        : <NewExpense onSave={expenseSaveHandler} onCancel={cancelAddExpenseHandler}/>}
      <Expenses data={allExpenses}/>
    </div>
  );
}

export default App;
