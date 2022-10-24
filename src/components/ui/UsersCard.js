import React from "react";
import { useSelector } from "react-redux";

import classes from "./UsersCard.module.css";

const UsersCard = (props) => {
  const theme = useSelector((state) => state.ui.chosenTheme);

  return (
    <div className={`${classes["user_card"]} ${classes[theme]}`}>
      {props.children}
    </div>
  );
};

export default UsersCard;
