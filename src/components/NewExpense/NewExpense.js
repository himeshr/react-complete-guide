import React from 'react';
import ExpenseForm from './ExpenseForm'; //useState is a ReactHook
import './NewExpense.css';

function NewExpense(props) {
  const newExpenseSaveHandler = (newExpense) => {
    const newExpenseItem = {...newExpense, id: Math.random()};
    props.onSave(newExpenseItem);
  }
  const addNewExpenseCancelHandler = () => {
    props.onCancel();
  }
  return (<div className='new-expense'>
      <ExpenseForm onExpenseSave={newExpenseSaveHandler} onExpenseCancel={addNewExpenseCancelHandler}/>
    </div>);
}

export default NewExpense;