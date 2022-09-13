import React, { useContext } from 'react'

import classes from './MeetupList.module.css'

import MeetupItem from './MeetupItem'
import MeetupsContext from '../../store/meetups-context'


const MeetupList = (props) => {
  const meetupsCtx = useContext(MeetupsContext)
  const {state} = meetupsCtx

  let meetups = (props.meetups
    ? [...props.meetups]
    : [...state.meetups]
  )

  return (
      <ul className={classes.list}>
        {meetups.map(meetup => <MeetupItem key={meetup.id} meetup={meetup} />)}
      </ul>
   )
}

export default MeetupList
