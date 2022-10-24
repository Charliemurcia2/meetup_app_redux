import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { meetupActions } from "../store/meetUp-slice";
import { userActions } from "../store/userSlice";

import MeetupList from "../components/meetups/MeetupList";
import DeletePopup from "../components/layout/DeletePopup";
// import SearchBar from '../components/layout/SearchBar'
import Loading from "../components/layout/Loading";
import useRequest from "../hooks/use-request";

const AllMeetups = () => {
  const { isLoading, callAPI } = useRequest();

  const meetupUrl = useSelector((state) => state.meetup.meetupURL);
  const userUrl = useSelector((state) => state.user.usersURL);
  const dispatch = useDispatch();

  useEffect(() => {
    callAPI(`${meetupUrl}.json`).then((data) => {
      dispatch(meetupActions.formatData(data));
    });
    callAPI(`${userUrl}.json`).then((data) => {
      dispatch(userActions.formatUsers(data));
    });
  }, []);

  return (
    <section>
      {isLoading && <Loading />}
      <DeletePopup />
      {/* <SearchBar /> */}
      <h1>All Meetups</h1>
      <MeetupList />
    </section>
  );
};

export default AllMeetups;
