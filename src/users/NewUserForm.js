import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";

import Card from "../components/ui/Card";

import classes from "./NewUserForm.module.css";
import useInput from "../hooks/use-input";
import useRequest from "../hooks/use-request";

const NewUserForm = () => {
  const usersUrl = useSelector((state) => state.user.usersURL);
  const dispatch = useDispatch();

  const { callAPI } = useRequest();

  const notEmptyValidation = (value) => value.trim() !== "";
  const imageValidation = (value) => {
    const regex = new RegExp(
      "(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?"
    );
    return regex.test(value);
  };

  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    clearInput: clearNameInput,
  } = useInput(notEmptyValidation);
  const {
    value: enteredImage,
    valueChangeHandler: imageChangeHandler,
    isValid: enteredImageIsValid,
    hasError: imageInputHasError,
    inputBlurHandler: imageBlurHandler,
    clearInput: clearImgInput,
  } = useInput(imageValidation);

  const submitHandler = (event) => {
    event.preventDefault();

    const userData = {
      name: enteredName,
      image: enteredImage,
    };

    callAPI(`${usersUrl}.json`, "POST", userData).then(() => {
      callAPI(`${usersUrl}.json`).then((data) => {
        dispatch(userActions.formatUsers(data));
      });
      clearNameInput();
      clearImgInput();
    });
  };

  let formIsValid = false;

  if (enteredNameIsValid && enteredImageIsValid) {
    formIsValid = true;
  }

  const nameInputClasses = nameInputHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  const imageInputClasses = imageInputHasError
    ? `${classes.control} ${classes.invalid}`
    : classes.control;
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="user/name">User Name</label>
          <input
            type="text"
            required
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
        </div>
        {nameInputHasError && (
          <p className={classes.feed}>Title must not be empty</p>
        )}
        <div className={imageInputClasses}>
          <label htmlFor="image">Profile Image</label>
          <input
            type="url"
            required
            id="image"
            value={enteredImage}
            onChange={imageChangeHandler}
            onBlur={imageBlurHandler}
          />
        </div>
        {imageInputHasError && (
          <p className={classes.feed}>Please enter valid image url</p>
        )}
        <div className={classes.actions}>
          <button disabled={!formIsValid}>Add User</button>
        </div>
      </form>
    </Card>
  );
};

export default NewUserForm;
