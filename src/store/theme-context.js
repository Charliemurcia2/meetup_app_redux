import React, { useState, createContext } from "react"

const ThemeContext = createContext({
  theme: 'light',
  changeThemeHandler: () => {}
})

export const ThemeContextProvider = props => {
  const [theme, setTheme] = useState('light')

  const changeThemeHandler = chosenTheme => {
    // TODO: reducer to change theme
    setTheme(chosenTheme === 'dark' ? 'dark' : 'light')
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
