import React, { useContext, useEffect } from 'react'
import Loading from '../components/layout/Loading'
import useRequest from '../hooks/use-request'
import MeetupsContext from '../store/meetups-context'
import NewUserForm from '../users/NewUserForm'
import UsersList from '../users/UsersList'
import { types } from '../Reducers/reducer'

const Users = props => {
  const meetupCtx = useContext(MeetupsContext)
  const { URLS, dispatch } = meetupCtx

  const {isLoading, callAPI} = useRequest()



  useEffect(() => {
    callAPI(`${URLS.meetup}.json`)
    .then(data => {
      dispatch({
        type: types.formattingData,
        payload: data
      })
    })
    callAPI(`${URLS.users}.json`)
    .then(data => {
      dispatch({
        type: types.formattingUsers,
        payload: data
      })
    })  
  }, []);

  return (
    <section>
      {isLoading && <Loading />}
      <NewUserForm />
      <UsersList />
    </section>
  )
}

export default Users
