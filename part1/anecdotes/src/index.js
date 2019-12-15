import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Anecdote = (props) => (
  <div>
    {props.anecdote}
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Votes = (props) => (
  <div>
    <p> has {props.points} votes </p>
  </div>
)

const App = (props) => {
  const newArray = Array(totalAnecdotes).fill(0)

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(newArray)
  const [top, setTop] = useState(0)

  const random = Math.random()
  const randomIndex = Math.floor(random * totalAnecdotes)
  const newSelection = () => setSelected(randomIndex)

  const upVote = (selected) => {
    copy[selected] += 1
    setPoints(copy[selected])
    setToTop(copy)
  }


  const setToTop = (copy) => {
    let maximo = topIndex(copy)
    setTop(maximo)
  }

  const topIndex = (arr) => {
    let i = arr.indexOf(Math.max(...arr))
    return i
    console.log(i)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote anecdote={anecdotes[selected]} />
      <Votes points={copy[selected]} />
      <Button handleClick={() => upVote(selected)} text="vote" />
      <Button handleClick={() => newSelection(randomIndex)} text="next anecdote" />
      <h1>Anecdote with most votes</h1>
      <Anecdote anecdote={anecdotes[top]} />
      <Votes points={copy[top]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
const totalAnecdotes = anecdotes.length
const points = Array(totalAnecdotes).fill(0)
const copy = [...points]


ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
