import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favoritesCount = useSelector((state) => state.favorite.totalFavorites);
  const theme = useSelector((state) => state.ui.chosenTheme);
  const dispatch = useDispatch();

  const changeThemeHandler = (event) => {
    dispatch(uiActions.changeTheme(event.target.value));
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My favortites{" "}
              <span className={classes.badge}>{favoritesCount}</span>
            </Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
      <select
        className={classes["theme-button"]}
        onChange={changeThemeHandler}
        value={theme}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
    </header>
  );
};

export default MainNavigation;
