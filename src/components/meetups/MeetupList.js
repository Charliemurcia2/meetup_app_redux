import React from "react";
import { useSelector } from "react-redux";

import classes from "./MeetupList.module.css";

import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  const stateMeetups = useSelector((state) => state.meetup.meetups);

  let meetups = props.meetups ? [...props.meetups] : [...stateMeetups];

  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
