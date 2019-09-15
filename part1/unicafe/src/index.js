import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistic = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  const all = (good, neutral, bad) => {
    return good + neutral + bad
  }
  const average = (good, neutral, bad) => {
    return (good - bad) / all(good, neutral, bad)
  }
  const positive = (good, neutral, bad) => {
    return (good / all(good, neutral, bad) ) * 100
  }

  if (good === 0 && neutral === 0 && bad === 0) {
    return (
    <div>
      <p>No feedback given</p>
    </div>
    )
  }
    return (
    <table>
      <tbody>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={all(good, neutral, bad)} />
        <Statistic text="average" value={average(good, neutral, bad)} />
        <Statistic text="positive" value={positive(good, neutral, bad) + "%"} />
      </tbody>
    </table>
  )

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood = newValue => setGood(newValue)
  const setToNeutral = newValue => setNeutral(newValue)
  const setToBad = newValue => setBad(newValue)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)
