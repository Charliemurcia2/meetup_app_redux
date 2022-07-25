import React, { useContext } from 'react'

import classes from './Card.module.css' 
import ThemeContext from '../../store/theme-context'

const Card = props => {
  const themeCtx = useContext(ThemeContext)

  return(
    <div className={`${classes.card} ${classes[themeCtx.theme]}`}>
      {props.children}
    </div>
  )
}

export default Card
