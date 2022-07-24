import React from 'react'
import { useRef } from 'react'

import Card from '../ui/Card'
import classes from './SearchBar.module.css'

const SearchBar = props => {
  const searchInputRef = useRef()

  const searchChangeHandler = event => {
    event.preventDefault()
    const enteredSearchTerm = searchInputRef.current.value
    props.termChange(enteredSearchTerm)
  }

  return (
    <Card>
    <div className={classes.control}>
      <input ref={searchInputRef} onChange={searchChangeHandler}/>
      <label>Busqueda</label>
    </div>
    </Card>
  )
}

export default SearchBar
