import React from 'react'
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import classes from './MeetupItem.module.css'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorites-context'
import useRequest from '../../hooks/use-request'

const MeetupItem = props => {
  const location = useLocation( )

  const { image, title, description, address, id, date } = props.meetup

  const favoritesCtx = useContext(FavoritesContext)
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id)
  const {deleteItemHandler} = useRequest()

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id)
    } else {
      favoritesCtx.addFavorite({
        id,
        title,
        description,
        image,
        address,
        date
      })
    }
  }

  const deleteMeetupHandler = () => {
    deleteItemHandler(id)
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt=''/>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <p>{date}</p>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Removed from favorites' : 'To Favorites'}
          </button>
          {(location.pathname === '/') ? (
            <button onClick={deleteMeetupHandler}>
              Delete Meetup
            </button>
          ): ''}
        </div>
      </Card>
    </li>
  )
}

export default MeetupItem
