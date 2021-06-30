import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  return (
    <ul className="expense-list">
      {props.items.length === 0 && <p className="expenses-list__fallback">Expense not found</p>}
      {props.items.length > 0 &&
        props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
    </ul>
  );
};

export default ExpensesList;
