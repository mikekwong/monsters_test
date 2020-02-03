import React, { useState, useEffect } from 'react'
import CardList from './components/CardList/CardList'
import Search from './Search/Search'
import './App.css'

function App () {
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  const filteredMonsters = data.filter(monster => {
    return monster.name.toLowerCase().includes(query.toLowerCase())
  })
  return (
    <div className='App'>
      <Search placeholder='find monsters' setQuery={setQuery} />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App
