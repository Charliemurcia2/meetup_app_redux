import React from "react";
import { useSelector } from "react-redux";

import classes from "./Card.module.css";

const Card = (props) => {
  const theme = useSelector((state) => state.ui.chosenTheme);

  return (
    <div className={`${classes.card} ${classes[theme]}`}>{props.children}</div>
  );
};

export default Card;
