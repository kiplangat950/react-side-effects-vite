import { useState, useEffect } from 'react'
import JokeDisplay from './components/JokeDisplay'
import FetchButton from './components/FetchButton'


function App() {
  const [joke, setJoke] = useState('')
  const [loading, setLoading] = useState(true)

  const fetchJoke = () => {
    setLoading(true)
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
    .then((res) => res.json())
    .then((data) => {
      setJoke(data.joke)
      setLoading(false)
    })
    .catch((error) => {
        console.error('Error fetching joke:', error)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchJoke()
  }, [])
  // Step 2: Use `useEffect` to call a function that fetches a joke when the component mounts

  // Step 3: Define a function that fetches a programming joke from an API
  // - Start by setting `loading` to true
  // - Fetch a joke from "https://v2.jokeapi.dev/joke/Programming?type=single"
  // - Update the `joke` state with the fetched joke
  // - Set `loading` to false once the joke is loaded
  // - Handle any errors in the `.catch` block

  return (
    <div className="app">
      <h1>Programming Jokes</h1>
      <JokeDisplay joke={joke} loading={loading} />
      <FetchButton fetchJoke={fetchJoke} />
    </div>
  )
}

export default App
