import React, { useContext } from "react";
import { useRef } from "react";
import { useSelector } from "react-redux";

import Card from "../ui/Card";
import classes from "./SearchBar.module.css";
import MeetupsContext from "../../store/meetups-context";

const SearchBar = (props) => {
  const theme = useSelector((state) => state.ui.chosenTheme);
  const searchInputRef = useRef();
  const { onSearchTermChange } = useContext(MeetupsContext);

  const searchChangeHandler = (event) => {
    event.preventDefault();
    const enteredSearchTerm = searchInputRef.current.value;
    onSearchTermChange(enteredSearchTerm);
  };

  return (
    <Card>
      <div className={`${classes.control} ${classes[theme]}`}>
        <input ref={searchInputRef} onChange={searchChangeHandler} />
        <label>Búsqueda</label>
      </div>
    </Card>
  );
};

export default SearchBar;
