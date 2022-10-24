import React from "react";
import { useSelector, useDispatch } from "react-redux";
import UsersCard from "../components/ui/UsersCard";
import useRequest from "../hooks/use-request";
import { meetupActions } from "../store/meetUp-slice";

import classes from "./UsersList.module.css";

const UsersList = (props) => {
  const meetupsUrl = useSelector((state) => state.meetup.meetupURL);
  const meetups = useSelector((state) => state.meetup.meetups);
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const { callAPI } = useRequest();

  const addUserToMeetup = (event, userId) => {
    const meetup = meetups.filter(
      (meetup) => meetup.title === event.target.value
    );
    const attendees =
      meetup[0].attendeesId.length !== 0 ? `${meetup[0].attendeesId},` : "";
    const newAttendeesId = `${attendees}${userId}`;
    callAPI(`${meetupsUrl}/${meetup[0].id}.json`, "PATCH", {
      attendeesId: newAttendeesId,
    }).then(() => {
      callAPI(`${meetupsUrl}.json`).then((data) => {
        dispatch(meetupActions.formatData(data));
      });
    });
  };

  return (
    <UsersCard>
      <div className={classes["users-card"]}>
        <h2>
          Users<span>{/* {participantsAmount} */}</span>
        </h2>
        <ul>
          {users &&
            users.map((user) => (
              <li key={user.id}>
                <img src={user.image} alt="profile" />
                <p>{user.name}</p>
                <label>Add a meetup</label>
                <select
                  defaultValue=""
                  onChange={(event) => addUserToMeetup(event, user.id)}
                >
                  <option value="" disabled hidden>
                    Choose a meetup
                  </option>
                  {meetups.map((meetup) => {
                    return <option key={meetup.id}>{meetup.title}</option>;
                  })}
                </select>
              </li>
            ))}
        </ul>
      </div>
    </UsersCard>
  );
};

export default UsersList;
