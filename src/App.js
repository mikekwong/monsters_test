import React, { useState, useEffect } from 'react'
import CardList from './components/CardList/CardList'
import './App.css'

function App () {
  const [data, setData] = useState({ monsters: [] })

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      setData(data)
    }
    fetchData()
  }, [])

  console.log(data)
  return (
    <div className='App'>
      <CardList monsters={data} />
    </div>
  )
}

export default App
