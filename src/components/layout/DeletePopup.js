import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { meetupActions } from "../../store/meetUp-slice";

import Card from "../ui/Card";
import classes from "./DeletePopup.module.css";

const DeletePopup = (props) => {
  const isPopupDelete = useSelector((state) => state.meetup.isPopupDelete);
  const dispatch = useDispatch();

  const closeDeletePopupHandler = (event) => {
    dispatch(meetupActions.toggleDeletePopUp());
  };
  return isPopupDelete ? (
    <Card>
      <div className={classes.popup}>
        <div>
          <h4>Item Deleted</h4>
        </div>
        <div>
          <button className={classes.close} onClick={closeDeletePopupHandler}>
            Close
          </button>
        </div>
      </div>
    </Card>
  ) : (
    ""
  );
};

export default DeletePopup;
