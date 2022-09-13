import React, { useContext } from 'react'
import useRequest from '../../hooks/use-request'
import { types } from '../../Reducers/reducer'

import MeetupsContext from '../../store/meetups-context'

import Card from '../ui/Card'
import classes from './DeletePopup.module.css'


const DeletePopup = props => {
  const {state, dispatch, URLS} = useContext(MeetupsContext)
  const {callAPI} = useRequest()

  const closeDeletePopupHandler = event => {
    dispatch({
      type: types.isPopupDelete
    })
    callAPI(`${URLS.meetup}.json`)
    .then(data => {
      dispatch({
        type: types.formattingData,
        payload: data
      })
    })
  }
  return (state.isPopupDelete) ? (
    <Card>
      <div className={classes.popup}>
        <div>
          <h4>Item Deleted</h4>
        </div>
        <div>
          <button className={classes.close} onClick={closeDeletePopupHandler}>Close</button>
        </div>
      </div>
    </Card>
  ) : ''
}

export default DeletePopup
