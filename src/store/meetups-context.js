import React, { useState, createContext }from 'react'

const MeetupsContext = createContext({
  isPopupDelete: false,
  closeDeletePopupHandler: () => {},
  openDeletePopupHandler: () => {}
})

export const MeetupsContextProvider = props => {
  const [isPopupDelete, setIsPopupDelete] = useState(false)
  

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
  const openDeletePopupHandler = () => {
    setIsPopupDelete(true)
  }

  const context = {
    isPopupDelete,
    closeDeletePopupHandler,
    openDeletePopupHandler,
  }
  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  )
}

export default MeetupsContext
