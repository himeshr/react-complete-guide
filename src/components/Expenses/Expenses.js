import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';

function Expenses(props) {
  const expenses = props.data;
  const [selectedYear, setSelectedYear] = useState('2021');
  const filterChangeHandler = (receivedYear) => {
    setSelectedYear(receivedYear);
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelectedYearChange={filterChangeHandler}/>
        <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}/>
        <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}/>
        <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}/>
        <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}/>
      </Card>
    </div>
  );
}

export default Expenses;