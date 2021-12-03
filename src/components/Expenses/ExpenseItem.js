import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // useState wants a default state value (here it's props.title)
  // In the array, the first element is the current state value,
  // The second element is a function for updating this value.
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // The new state value is set as an argument:
    setTitle("updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
};

export default ExpenseItem;
