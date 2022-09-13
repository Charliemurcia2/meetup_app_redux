import React, { useContext } from 'react'

import Card from '../components/ui/Card'

import classes from './NewUserForm.module.css'
import useInput from '../hooks/use-input'
import MeetupsContext from '../store/meetups-context'
import useRequest from '../hooks/use-request'
import { types } from '../Reducers/reducer'

const NewUserForm = () => {
  const meetupCtx = useContext(MeetupsContext)
  const { callAPI } = useRequest()

  const notEmptyValidation = value => value.trim() !== ''
  const imageValidation = value => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')
    return regex.test(value)
  }

  const {
    value: enteredName,
    valueChangeHandler: nameChangeHandler,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    inputBlurHandler: nameBlurHandler,
    clearInput: clearNameInput
  } = useInput(notEmptyValidation)
  const {
    value: enteredImage,
    valueChangeHandler: imageChangeHandler,
    isValid: enteredImageIsValid,
    hasError: imageInputHasError,
    inputBlurHandler: imageBlurHandler,
    clearInput: clearImgInput
  } = useInput(imageValidation)

  const submitHandler = event => {
    event.preventDefault()

    const userData = {
      name: enteredName,
      image: enteredImage,
    }
    
    callAPI(`${meetupCtx.URLS.users}.json`, 'POST',userData)
    .then(() => {
      callAPI(`${meetupCtx.URLS.users}.json`)
      .then(data => {
        meetupCtx.dispatchUsers({
          type: types.formattingUsers,
          payload: data
        })
      }) 
      clearNameInput()
      clearImgInput() 
    })

  }

  let  formIsValid = false

  if (enteredNameIsValid && enteredImageIsValid) {
    formIsValid = true
  }

  const nameInputClasses = nameInputHasError
  ? `${classes.control} ${classes.invalid}`
  : classes.control
  const imageInputClasses = imageInputHasError
  ? `${classes.control} ${classes.invalid}`
  : classes.control
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="user/name">User Name</label>
          <input type='text' required id='name' value={enteredName} onChange={nameChangeHandler} onBlur={nameBlurHandler}/>
        </div>
        {nameInputHasError && <p className={classes.feed}>Title must not be empty</p>}
        <div className={imageInputClasses}>
          <label htmlFor="image">Profile Image</label>
          <input type='url' required id='image' value={enteredImage} onChange={imageChangeHandler} onBlur={imageBlurHandler}/>
        </div>
        {imageInputHasError && <p className={classes.feed}>Please enter valid image url</p>}
        <div className={classes.actions}>
          <button disabled={!formIsValid}>Add User</button>
        </div>
      </form>
    </Card>
  )
}

export default NewUserForm
