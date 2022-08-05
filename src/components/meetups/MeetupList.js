import React from 'react'

import classes from './MeetupList.module.css'

import MeetupItem from './MeetupItem'
import useRequest from '../../hooks/use-request'


const MeetupList = (props) => {
  const {loadedMeetups} = useRequest()

  let meetups = []
  if (props.meetups) {
    meetups = [...props.meetups]
  } else {
    meetups = loadedMeetups
  }
   return (
      <ul className={classes.list}>
        {meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)}
      </ul>
   )
}

export default MeetupList
