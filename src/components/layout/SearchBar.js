import React, { useContext } from 'react'
import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './SearchBar.module.css'
import ThemeContext from '../../store/theme-context'

const SearchBar = props => {
  const searchInputRef = useRef()
  const themeCtx = useContext(ThemeContext)

  const searchChangeHandler = event => {
    event.preventDefault()
    const enteredSearchTerm = searchInputRef.current.value
    props.termChange(enteredSearchTerm)
  }

  return (
    <Card>
    <div className={`${classes.control} ${classes[themeCtx.theme]}`}>
      <input ref={searchInputRef} onChange={searchChangeHandler}/>
      <label>Busqueda</label>
    </div>
    </Card>
  )
}

export default SearchBar
