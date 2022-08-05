import { useCallback, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import MeetupsContext from '../store/meetups-context'

const useRequest = () => {
  const history = useHistory()

  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [loadedMeetups, setLoadedMeetups] = useState([])
  const [staticLoadMeetups, setStaticLoadMeetups] = useState([])

  const meetupsCtx = useContext(MeetupsContext)
  const { openDeletePopupHandler } = meetupsCtx


  const loadContent = () => {
    fetch(
      'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups.json'
    ).then(response => {
      if (!response.ok) {
        setError('something is wrong')
        throw Error(`something is wrong. ${response.status}`)
      }
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
      setError('')
      setLoadedMeetups(meetups)
      setStaticLoadMeetups(meetups)
    })
  }

  const postRequest = (newMeetup) => {
    fetch(
      'https://react-learn-1e665-default-rtdb.firebaseio.com/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(newMeetup),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ).then(() => {
      history.replace('/')
    })
  }


  const deleteRequest = useCallback(meetupId => {
    fetch(
      `https://react-learn-1e665-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
      { 
        method: 'DELETE',
        mode: 'cors'
      }
    ).then(() => {
      
      loadContent()
    })
    openDeletePopupHandler()
  }, [])
  
  
  useEffect(() => {
    loadContent()
    // TODO: ask I need add this dependency to re-render because the state is crested here not in the component
  }, [loadedMeetups])

  return {
    isLoading,
    staticLoadMeetups,
    loadedMeetups,
    error,
    addNewMeetupHandler: postRequest,
    deleteItemHandler: deleteRequest
  }
}

export default useRequest
