import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import useRequest from "../../hooks/use-request";
import { meetupActions } from "../../store/meetUp-slice";

import classes from "./Guests.module.css";

const Guests = (props) => {
  const users = useSelector((state) => state.user.users);
  const meetupUrl = useSelector((state) => state.meetup.meetupURL);
  const dispatch = useDispatch();
  const { callAPI } = useRequest();

  const meetupAttendees =
    typeof props.attendeesId === "string"
      ? props.attendeesId.split(",")
      : props.attendeesId;

  let guests = [];
  if (!meetupAttendees) {
    guests = [];
  } else {
    meetupAttendees.forEach((attendee) => {
      const realAttendee = users.filter((user) => user.id === attendee);
      if (realAttendee[0]) {
        guests.push(realAttendee[0]);
      }
    });
  }

  const deleteAttendee = (guestId) => {
    const removeAttendeeFromMeetup = meetupAttendees.filter(
      (attendee) => attendee !== guestId
    );
    callAPI(`${meetupUrl}/${props.meetupId}.json`, "PATCH", {
      attendeesId: removeAttendeeFromMeetup,
    }).then(() => {
      callAPI(`${meetupUrl}.json`).then((data) => {
        dispatch(meetupActions.formatData(data));
      });
    });
  };

  return (
    <Fragment>
      <div className={classes["guests-card"]}>
        <h2>
          Attendees <span>({guests.length})</span>
        </h2>
        {guests && (
          <ul>
            {guests.map((guest) => (
              <li key={guest.id}>
                <img src={guest.image} alt="profile" />
                <p>{guest.name}</p>
                <button onClick={(event) => deleteAttendee(guest.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default Guests;
