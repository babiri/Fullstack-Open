
import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name} />
        {content(course)}
        {total}
      </div>
    )
  }

const Header = (props) => {
  return (
    <h1>{props.header}</h1>
  )
}

const Part = ({name, exercises}) => {
  return (
    <ul>
      {name} {exercises}
    </ul>
  )
}

const content = (course) =>
  course.parts.map(part =>
    <Part
      key={part.id}
      part={part}
      name={part.name}
      exercises={part.exercises}
    />
  )

const total = (content) => content.exercises.reduce( (a,b) => a + b, 0)

const App = () => {
  const course = {
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root'))
