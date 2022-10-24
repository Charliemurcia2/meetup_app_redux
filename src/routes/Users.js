import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../store/userSlice";
import { meetupActions } from "../store/meetUp-slice";
import Loading from "../components/layout/Loading";
import useRequest from "../hooks/use-request";
import NewUserForm from "../users/NewUserForm";
import UsersList from "../users/UsersList";

const Users = (props) => {
  const usersUrl = useSelector((state) => state.user.usersURL);
  const meetupUrl = useSelector((state) => state.meetup.meetupURL);
  const dispatch = useDispatch();

  const { isLoading, callAPI } = useRequest();

  useEffect(() => {
    callAPI(`${meetupUrl}.json`).then((data) => {
      dispatch(meetupActions.formatData(data));
    });
    callAPI(`${usersUrl}.json`).then((data) => {
      dispatch(userActions.formatUsers(data));
    });
  }, []);

  return (
    <section>
      {isLoading && <Loading />}
      <NewUserForm />
      <UsersList />
    </section>
  );
};

export default Users;
