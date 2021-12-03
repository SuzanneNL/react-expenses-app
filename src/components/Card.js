import React from 'react';

import "./Card.css";

const Card = (props) => {
  //This adds the classNames from the className prop:
  const classes = "card " + props.className;

  // props.children is used to add the data between the opening and closing JSX tags:
  return <div className={classes}>{props.children}</div>;
};

export default Card;
