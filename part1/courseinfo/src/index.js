
import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({ course }) => {
    return (
      <div>
        <Header header={course.name} />
        {content(course)}
        <h3>total of {total(course)} exercises</h3>
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
    <p>
      {name} {exercises}
    </p>
  )
}

const content = (course) =>
  course.parts.map(part =>
    <Part
      key={part.id}
      name={part.name}
      exercises={part.exercises}
    />
  )

  const total = (course) =>
    course.parts.reduce((a, b) => {

      console.log('What is happening', a, b)
      return a.exercises + b.exercises
    })

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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
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
