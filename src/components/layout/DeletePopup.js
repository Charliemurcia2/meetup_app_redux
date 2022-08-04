import React, { useContext } from 'react'

import MeetupsContext from '../../store/meetups-context'

import Card from '../ui/Card'
import classes from './DeletePopup.module.css'


const DeletePopup = props => {
  const {isPopupDelete, closeDeletePopupHandler} = useContext(MeetupsContext)
  return (isPopupDelete) ? (
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
