import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  // Calling useState only once and pass an object as a value:
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  // When you update the state, you need to update all three properties.
  // So when you update the title, you need to pass in an object
  // and use the spread operator so the other data doesn't get lost. 
  // Then you can override the title key value pair.
  const titleChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredAmount: event.target.value,
      });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
        ...userInput,
        enteredDate: event.target.value,
      });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
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

export default ExpenseForm;
