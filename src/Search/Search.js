import React from 'react'
import './Search'

const Search = ({ placeholder, setQuery }) => {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      onChange={e => setQuery(e.target.value)}
    />
  )
}

export default Search
