import React, { useContext } from 'react'

import classes from './Layout.module.css'
import MainNavigation from './MainNavigation'
import ThemeContext from '../../store/theme-context'

const Layout = props => {
  const themeCtx = useContext(ThemeContext)
  const theme = themeCtx.theme
  console.log(theme)
  
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>
        {props.children}
      </main>
    </div>

  )

}

export default Layout
