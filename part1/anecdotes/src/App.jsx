/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

  const handleSelected = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomIndex)
  }

  const handleVote = () => {
    const arrayIndex = anecdotes.indexOf(anecdotes[selected])
    const copy = { ...votes }
    copy[arrayIndex] = copy[arrayIndex] += 1
    setVotes(copy)
  }

  let highestValue = -Infinity
  let highestIndex = -1

  for (const [index, value] of Object.entries(votes)) {
    if (value > highestValue) {
      highestValue = value
      highestIndex = index
    }
  }

  return (
    <>
      <div>{anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <br />
      <button onClick={handleSelected}>Next</button>
      <button onClick={handleVote}>Vote</button>
      <br />
      <br />
      <div>Anectdote with most votes:</div>
      {highestValue > 0 ? (
        <>
          <div>{anecdotes[highestIndex]}</div>
          <div>has {votes[highestIndex]} votes</div>
        </>
      ) : (
        <p></p>
      )}
    </>
  )
}

export default App
