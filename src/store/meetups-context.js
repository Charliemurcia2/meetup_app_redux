import React, { useState, createContext, useCallback }from 'react'

const MeetupsContext = createContext({
  loadedMeetups: [],
  isPopupDelete: false,
  isLoading: (true),
  closeDeletePopupHandler: () => {},
  onSearchTermChange: () => {},
  loadContent: () => {},
  deleteItemHandler: () => {},
  notLoading: () => {}
})

export const MeetupsContextProvider = props => {
  const [isLoading, setIsLoading] = useState(true)
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const [staticLoadMeetups, setStaticLoadMeetups] = useState([])
  const [isPopupDelete, setIsPopupDelete] = useState(false)
  
 
  const loadContent = () => {
    fetch(
      'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      return response.json()
    }).then(data => {
      const meetups = []

      for (const key in data) {
        const meetup = {
          id: key,
          ...data[key]
        }
        meetups.push(meetup)
      }

      setIsLoading(false)
      setLoadedMeetups(meetups)
      setStaticLoadMeetups(meetups)
    })
  }
  const searchFilter = searchTerm => {
    const searchResult = staticLoadMeetups.filter(meetup => {
     if (meetup.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return meetup
     }
     return ''
    })
    setLoadedMeetups(searchResult)
  }

  const onSearchTermChange = newTerm => {
    if (newTerm.length !== 0) {
      searchFilter(newTerm)  
    } else {
      setLoadedMeetups(staticLoadMeetups)
    }
  }

  const closeDeletePopupHandler = () => {
    setIsPopupDelete(false)
  }

  const deleteItemHandler = useCallback(meetupId => {
    fetch(
      `https://react-learn-1e665-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
      { 
        method: 'DELETE',
        mode: 'cors'
      }
    ).then(() => {
      loadContent()
    })
    setIsPopupDelete(true)
  })

  const notLoading = () => {
    setIsLoading(false)
  }

  const context = {
    loadedMeetups,
    loadContent,
    deleteItemHandler,
    isPopupDelete,
    isLoading,
    closeDeletePopupHandler,
    onSearchTermChange,
    notLoading
  }
  return (
    <MeetupsContext.Provider value={context}>
      {props.children}
    </MeetupsContext.Provider>
  )
}

export default MeetupsContext
