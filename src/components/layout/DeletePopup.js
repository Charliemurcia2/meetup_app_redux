import React from 'react'
import Card from '../ui/Card'
import classes from './DeletePopup.module.css'

const DeletePopup = props => {
  return (props.appear) ? (
    <Card>
      <div className={classes.popup}>
        <div>
          <h4>Item Deleted</h4>
        </div>
        <div>
          <button className={classes.close} onClick={props.closeButton}>Close</button>
        </div>
      </div>
    </Card>
  ) : ''
}

export default DeletePopup
