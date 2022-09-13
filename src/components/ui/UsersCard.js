import React, { useContext }from 'react'

import classes from './UsersCard.module.css'
import ThemeContext from '../../store/theme-context'

const UsersCard = props => {
  const themeCtx = useContext(ThemeContext)

  return(
    <div className={`${classes['user_card']} ${classes[themeCtx.theme]}`}>
      {props.children}
    </div>
  )
}

export default UsersCard
