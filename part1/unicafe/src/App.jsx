/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'

import { Button } from './components/Button'
import { Total } from './components/Total'

// a proper place to define a component
const Statistics = ({ good, bad, neutral }) => {
  let total = good + bad + neutral
  return (
    <div>
      <h2>Statistics</h2>
      {total !== 0 ? (
        <>
          <Total name="positive" total={good} />
          <Total name="neutral" total={neutral} />
          <Total name="negative" total={bad} />
          <Total name="total" total={total} />
          <Total name="average" total={(total / 3).toFixed(2)} />
          <Total
            name="positive"
            total={`${((good / total) * 100).toFixed(2)} %`}
          />
        </>
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const giveFeedback = (feedback) => {
    if (feedback === 'good') {
      return () => {
        console.log('setting good')
        setGood(good + 1)
      }
    } else if (feedback === 'neutral') {
      return () => {
        console.log('setting neutral')
        setNeutral(neutral + 1)
      }
    }
    return () => {
      console.log('setting bad')
      setBad(bad + 1)
    }
  }

  return (
    <>
      <h2>Give feedback</h2>
      <Button name="positive" handleClick={giveFeedback('good')} />
      <Button name="neutral" handleClick={giveFeedback('neutral')} />
      <Button name="negative" handleClick={giveFeedback('bad')} />
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>
  )
}

export default App
