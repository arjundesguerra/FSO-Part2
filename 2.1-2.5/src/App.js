import Content from './components/content'

const Course = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
      <Content parts={course.parts} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

return (
    <div>
      {courses.map(course => (
        <div key={course.id}>
        <Course key={course.id} course={course} />
        <b>Total of {course.parts.reduce((total, part) => total + part.exercises, 0)} exercises</b>
        </div>
      ))}
    </div>
  )
}

export default App