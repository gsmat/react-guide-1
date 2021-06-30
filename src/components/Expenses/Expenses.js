import ExpenseItem from '../Expenses/ExpenseItem';
import Card from '../UI/Card';
import React , { useState}from "react";
import '../Expenses/Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => setFilteredYear(selectedYear);
 
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      {props.items.map(item => {
        return (<ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
        />)
      })}
    </Card>
  );
}

export default Expenses;