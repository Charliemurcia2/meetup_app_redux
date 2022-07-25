import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context'
import ThemeContext from '../../store/theme-context'

const MainNavigation = () => {
  const favoritesCtx = useContext(FavoritesContext)
  const themeCtx = useContext(ThemeContext)

  const changeThemeHandler = event => {
    themeCtx.changeTheme(event.target.value)
  }

  return (
    <header className={classes.header}>
    <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li><Link to='/'>All Meetups</Link></li>
          <li><Link to='/new-meetup'>new meetup</Link></li>
          <li><Link to='/favorites'>My favortites <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link></li>
        </ul>
      </nav>
      <select className={classes['theme-button']} onChange={changeThemeHandler}>
        <option value='light'>light</option>
        <option value='dark'>dark</option>
      </select>
    </header>
  )
}

export default MainNavigation
