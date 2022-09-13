import React, { useContext } from 'react'
import Modal from '../components/ui/Modal'
import { types } from '../Reducers/usersReducer'

import classes from './UsersSelect.module.css'
import MeetupsContext from '../store/meetups-context'
import UsersList from './UsersList'
const UsersSelect = props => {
  const {dispatchUsers} = useContext(MeetupsContext)

  const closeHandler = event => {
    dispatchUsers({
      type: types.hidingUsers
    })
  }
  return (
    <Modal onClose={closeHandler}>
      <h2>Select meetup attendees</h2>
      <UsersList meetup={props.meetup}/>
      <div className={classes.actions}>
        <button onClick={closeHandler}>No more attendees to add</button>
      </div>
    </Modal>
  )
}

export default UsersSelect
