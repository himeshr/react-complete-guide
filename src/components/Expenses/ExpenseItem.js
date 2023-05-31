import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import {useState} from 'react';
//Above named import is to import state hook, useState (hooks have prefix 'use')

function ExpenseItem(props) {
  //State , destructuring response into 2 constants, first one would be the reference to fetch the saved value,
  //second, would be the setter method, which would not only update the saved value, but also cause reload of the component
  const [title, setTitle] = useState(props.title); //React ensures that title is not re-initialized with props value on later reloads
  //State has to be initialized inside Component main body only

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date}/>
      <div>
        <div className="expense-item__description">
          {/*//using the state value to get the change to be reflected on screen*/}
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          {/* "onEvent declarations", event callbacks specified using onSomeEvent */}
        </div>
      </div>
    </div>);

}

export default ExpenseItem;