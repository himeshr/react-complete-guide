import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import {useState} from 'react';

function Expenses(props) {
  const expenses = props.data;
  const [selectedYear, setSelectedYear] = useState('2023');
  const filterChangeHandler = (receivedYear) => {
    setSelectedYear(receivedYear);
  }
  const filteredExpenses = expenses.filter(expense => expense.date.getFullYear() === Number.parseInt(selectedYear));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSelectedYearChange={filterChangeHandler}/>
        {filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title}
                                                      amount={expense.amount} date={expense.date}/>)}
      </Card>
    </div>
  );
}

export default Expenses;