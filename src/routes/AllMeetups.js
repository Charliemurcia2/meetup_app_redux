import React, { useContext } from 'react'
import { useEffect } from 'react'

import MeetupsContext from '../store/meetups-context'

import MeetupList from '../components/meetups/MeetupList'
import DeletePopup from '../components/layout/DeletePopup'
import SearchBar from '../components/layout/SearchBar'



const AllMeetups = () => {
  const meetupsCtx = useContext(MeetupsContext)
  const {loadContent, isLoading, notLoading} = meetupsCtx

  useEffect(() => {
    notLoading()
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
      <DeletePopup />
      <SearchBar />
      <h1>All Meetups</h1>
      <MeetupList />
    </section>
  )
}

export default AllMeetups
