

const JokeDisplay = ({ joke, loading }) => {


  return (
    <div className="joke-container">
        <p>{loading ? 'Loading...' : joke}</p>
      {/* Step 2: If `loading` is true, display "Loading..." */}
      {/* Step 3: Otherwise, display the joke */}
    </div>
  )
}

export default JokeDisplay
