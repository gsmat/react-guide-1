import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseFrom";
const NewExpense = (props) => {

  const [isedit,setIsEdit] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startEditHandler = ()=> {
    setIsEdit(true)
  }

  const stopEditHandler = ()=> {
    setIsEdit(false)
  }
  return (
    <div className="new-expense">
      {!isedit &&<button onClick={startEditHandler}>Add New Expense</button>}
      {isedit && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onStopEditingExpense={stopEditHandler} />}
    </div>
  );
};

export default NewExpense;
