import React, { useState, createContext } from "react"

const ThemeContext = createContext({
  theme: 'light',
  changeThemeHandler: () => {}
})

export const ThemeContextProvider = props => {
  const [theme, setTheme] = useState('light')

  const changeThemeHandler = chosenTheme => {
    if (chosenTheme === 'dark') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const context = {
    theme,
    changeTheme: changeThemeHandler
  }
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
