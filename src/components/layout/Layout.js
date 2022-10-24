import React from "react";
import { useSelector } from "react-redux";

import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const theme = useSelector((state) => state.ui.chosenTheme);

  return (
    <div className={classes[theme]}>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};

export default Layout;
