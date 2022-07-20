import { useHistory } from 'react-router-dom'
import React from 'react'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

const NewMeetup = () => {
  const history = useHistory( )
  const addNewMeetupHandler = newMeetup => {
    fetch(
      'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(newMeetup),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    })
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addNewMeetupHandler}/>
    </section>
  )
}

export default NewMeetup
