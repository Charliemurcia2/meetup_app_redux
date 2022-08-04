import React, { useContext } from 'react'

import MeetupsContext from '../../store/meetups-context'
import classes from './MeetupList.module.css'

import MeetupItem from './MeetupItem'


const MeetupList = (props) => {
  const {loadedMeetups} = useContext(MeetupsContext)
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
