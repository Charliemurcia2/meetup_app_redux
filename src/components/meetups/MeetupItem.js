import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { meetupActions } from "../../store/meetUp-slice";
import { favoriteActions } from "../../store/favorite-slice";

import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import useRequest from "../../hooks/use-request";
import UsersCard from "../ui/UsersCard";
import Guests from "../guests/Guests";

const MeetupItem = (props) => {
  const location = useLocation();

  const { image, title, description, address, id, date, attendeesId } =
    props.meetup;

  const meetupsUrl = useSelector((state) => state.meetup.meetupURL);
  const favorites = useSelector((state) => state.favorite.favorites);
  const dispatch = useDispatch();
  const { callAPI } = useRequest();

  const [isFavorite, setIsFavorite] = useState(false);

  const validateIsFavorite = (id) => {
    if (favorites.some((meetupId) => meetupId === id)) {
      setIsFavorite(true);
    }
  };

  validateIsFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      dispatch(favoriteActions.removeFromFavorites(id));
      setIsFavorite(false);
    } else {
      dispatch(
        favoriteActions.addToFavorite({
          id,
          title,
          description,
          image,
          address,
          date,
          attendeesId,
        })
      );
      setIsFavorite(true);
    }
  };

  const deleteMeetupHandler = () => {
    callAPI(`${meetupsUrl}/${id}.json`, "DELETE").then(() => {
      callAPI(`${meetupsUrl}.json`).then((data) => {
        dispatch(meetupActions.formatData(data));
      });
      dispatch(meetupActions.toggleDeletePopUp());
    });
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt="" />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{date}</p>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
          {location.pathname === "/" ? (
            <button onClick={deleteMeetupHandler}>Delete Meetup</button>
          ) : (
            ""
          )}
        </div>
        <UsersCard>
          <Guests
            attendeesId={props.meetup.attendeesId}
            meetupId={props.meetup.id}
          ></Guests>
        </UsersCard>
      </Card>
    </li>
  );
};

export default MeetupItem;
