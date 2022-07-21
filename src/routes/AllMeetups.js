import React from 'react'
import { useState, useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList'
import DeletePopup from '../components/layout/DeletePopup'


const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const [hasDeletion, setHasDeletion] = useState(false)
  const [ isPopupDelete, setIsPopupDelete ] = useState(false)

  const deleteItemHandler = meetupId => {
    fetch(
      `https://react-learn-1e665-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
      { 
        method: 'DELETE',
        mode: 'cors'
      }
    )
    setIsPopupDelete(true)
    setHasDeletion(true)
  }

  const closeDeletePopupHandler = () => {
    setIsPopupDelete(false)
  }

  useEffect(() => {
    setHasDeletion(false)
    setIsLoading(true)
    fetch(
      'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

      setIsLoading(false)
      setLoadedMeetups(meetups)
    })
  }, [ hasDeletion ])

  if (isLoading) {
    return (
      <section>
        <p>Loading.....</p>
      </section>
    )
  }

  return (
    <section>
      <DeletePopup appear={isPopupDelete} closeButton={closeDeletePopupHandler}></DeletePopup>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} deleteItem={deleteItemHandler}/>
    </section>
  )
}

export default AllMeetups
