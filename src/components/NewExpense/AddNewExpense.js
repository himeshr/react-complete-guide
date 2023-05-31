import React from 'react';
import './AddNewExpense.css';

const AddNewExpense = (props) => {
  return (
    <div className='add-new-expense'>
      <div className='add-new-expense__controls'>
        <div className='add-new-expense__actions'>
          <button onClick={props.onAddClick}>Add new expense</button>
        </div>
      </div>
    </div>
  );
}

export default AddNewExpense;