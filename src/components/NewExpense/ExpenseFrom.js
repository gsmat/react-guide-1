import React, { useState } from "react";

import "./ExpenseFrom.css";

const ExpenseFrom = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");

  // this method not correctly
  // when we used updates previous element this method dont give correct data\
  /*
  const [userInput,setUserInput] = useState({
    enteredTitle : '',
    enteredDate:'',
    enteredNumber:''
  });

  const titleChangeHandler = (event) =>
    setUserInput({ ...userInput, enteredTitle: event.target.value });
  const dateChangeHandler = (event) =>
    setUserInput({ ...userInput, enteredDate: event.target.value });
  const numberChangeHandler = (event) =>
    setUserInput({ ...userInput, enteredNumber: event.target.value });
*/

  const titleChangeHandler = (event) => setEnteredTitle(event.target.value);
  const dateChangeHandler = (event) => setEnteredDate(event.target.value);
  const numberChangeHandler = (event) => setEnteredNumber(event.target.value);

  const submitFromHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredNumber,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredNumber("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitFromHandler}>
      <div className="new-exoense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredNumber}
            onChange={numberChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-30"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseFrom;
