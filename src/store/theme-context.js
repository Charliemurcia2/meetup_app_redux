import React, { createContext } from "react"

const ThemeContext = createContext({
  theme: 'light'
})

export const ThemeContextProvider = props => {
  const context = {
    theme: 'light'
  }
  return (
    <ThemeContext.Provider value={context}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext
