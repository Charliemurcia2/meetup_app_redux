import React, { createContext, useReducer }from 'react'

import reducer, { initialState } from '../Reducers/reducer'

const MeetupsContext = createContext({
  isPopupDelete: false,
  closeDeletePopupHandler: () => {},
  openDeletePopupHandler: () => {}
})

export const MeetupsContextProvider = props => {
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

  const context = {
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
