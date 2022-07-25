import React from 'react'
import { useState, useEffect } from 'react'

import MeetupList from '../components/meetups/MeetupList'
import DeletePopup from '../components/layout/DeletePopup'
import SearchBar from '../components/layout/SearchBar'


const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const [staticLoadMeetups, setStaticLoadMeetups] = useState([])
  const [isPopupDelete, setIsPopupDelete] = useState(false)

  // useCallback
  const deleteItemHandler = meetupId => {
    fetch(
      `https://react-learn-1e665-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
      { 
        method: 'DELETE',
        mode: 'cors'
      }
    ).then(() => {
      loadContent()
    })
    setIsPopupDelete(true)
  }

  const closeDeletePopupHandler = () => {
    setIsPopupDelete(false)
  }

  const searchFilter = searchTerm => {
    const searchResult = staticLoadMeetups.filter(meetup => {
     if (meetup.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return meetup
     }
     return ''
    })
    setLoadedMeetups(searchResult)
  }

  const onSearchTermChange = newTerm => {
    if (newTerm.length !== 0) {
      searchFilter(newTerm)  
    } else {
      setLoadedMeetups(staticLoadMeetups)
    }
  }

  const loadContent = () => {
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
      setStaticLoadMeetups(meetups)
    })
  }

  useEffect(() => {
    setIsLoading(true)
    loadContent()
  }, [])

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
      <SearchBar termChange={onSearchTermChange}></SearchBar>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} deleteItem={deleteItemHandler}/>
    </section>
  )
}

export default AllMeetups
