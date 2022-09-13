import React, { useContext } from 'react'
import UsersCard from '../components/ui/UsersCard'
import useRequest from '../hooks/use-request'
import { types } from '../Reducers/reducer'

import classes from './UsersList.module.css'
import MeetupsContext from '../store/meetups-context'

const UsersList = props => {
  const { callAPI } = useRequest()
  const {state, URLS, dispatch} = useContext(MeetupsContext)

  const addUserToMeetup = (event, userId) => {
    const meetup = state.meetups.filter(meetup => meetup.title === event.target.value)
    const attendees = meetup[0].attendeesId.length !== 0 ? `${meetup[0].attendeesId},` : ''
    const newAttendeesId = `${attendees}${userId}`
    callAPI(`${URLS.meetup}/${meetup[0].id}.json`, 'PATCH', {'attendeesId': newAttendeesId})
    .then(() => {
      callAPI(`${URLS.meetup}.json`)
      .then(data => {
        dispatch({
          type: types.formattingData,
          payload: data
        })
      })
    })
  }

  return (
    <UsersCard>
      <div className={classes['users-card']}>
        <h2>Users<span>{/* {participantsAmount} */}</span></h2>
        <ul>
          { state.users && state.users.map(user => (
            <li key={user.id}>
              <img src={user.image} alt='profile'/>
              <p>{user.name}</p>
              <label>Add a meetup</label>
              <select value={state.userMeetupId} defaultValue='' onChange={(event) => addUserToMeetup(event, user.id)}>
                <option value='' disabled hidden>Choose a meetup</option>
                {state.meetups.map(meetup => {
                  return (
                    <option key={meetup.id}>{meetup.title}</option>
                  )
                })}
              </select>

            </li>
          ))}
        </ul>
      </div>
    </UsersCard>
  )
}

export default UsersList
