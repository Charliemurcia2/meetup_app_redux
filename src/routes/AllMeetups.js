import React from 'react'

import MeetupList from '../components/meetups/MeetupList'
import DeletePopup from '../components/layout/DeletePopup'
// import SearchBar from '../components/layout/SearchBar'
import Loading from '../components/layout/Loading'
import useRequest from '../hooks/use-request'



const AllMeetups = () => {
  const {isLoading, error} = useRequest()

  if (error) {
    console.log(error)
  }

  return (
    <section>
      {isLoading && <Loading />}
      <DeletePopup />
      {/* <SearchBar /> */}
      <h1>All Meetups</h1>
      <MeetupList />
    </section>
  )
}

export default AllMeetups
