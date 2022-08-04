import React, { useContext } from 'react'
import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './SearchBar.module.css'
import ThemeContext from '../../store/theme-context'
import MeetupsContext from '../../store/meetups-context'

const SearchBar = props => {
  const searchInputRef = useRef()
  const themeCtx = useContext(ThemeContext)
  const {onSearchTermChange} = useContext(MeetupsContext)

  const searchChangeHandler = event => {
    event.preventDefault()
    const enteredSearchTerm = searchInputRef.current.value
    onSearchTermChange(enteredSearchTerm)
  }

  return (
    <Card>
    <div className={`${classes.control} ${classes[themeCtx.theme]}`}>
      <input ref={searchInputRef} onChange={searchChangeHandler}/>
      <label>Búsqueda</label>
    </div>
    </Card>
  )
}

export default SearchBar
