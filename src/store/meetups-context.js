import React, { useState, createContext, useReducer }from 'react'

import reducer, { initialState } from '../Reducers/reducer'

const MeetupsContext = createContext({
  isPopupDelete: false,
  closeDeletePopupHandler: () => {},
  openDeletePopupHandler: () => {}
})

export const MeetupsContextProvider = props => {
  // const [loadedMeetups, setLoadedMeetups] = useState([])
  // const [staticLoadMeetups, setStaticLoadMeetups] = useState([])
  const [isPopupDelete, setIsPopupDelete] = useState(false)

  // const [loadedMeetups, dispatchLoadedMeetups] = useReducer(usersReducer, initialState)
  const [state, dispatch] = useReducer(reducer, initialState)


  
  const URLS = {
    meetup: 'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups',
    users: 'https://react-learn-1e665-default-rtdb.firebaseio.com/users'
  }
  
  // const searchFilter = searchTerm => {
  //   const searchResult = staticLoadMeetups.filter(meetup => {
  //    if (meetup.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //     return meetup
  //    }
  //    return ''
  //   })
  //   setLoadedMeetups(searchResult)
  // }

  // const onSearchTermChange = newTerm => {
  //   if (newTerm.length !== 0) {
  //     searchFilter(newTerm)  
  //   } else {
  //     setLoadedMeetups(staticLoadMeetups)
  //   }
  // }

  const closeDeletePopupHandler = () => {
    setIsPopupDelete(false)
  }

  const context = {
    isPopupDelete,
    setIsPopupDelete,
    closeDeletePopupHandler,
    dispatch,
    state,
    // setStaticLoadMeetups,
    URLS
  }
  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  )
}

export default MeetupsContext
