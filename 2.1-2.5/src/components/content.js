const Content = ({ parts }) => {
    return (
        <div>
            {parts.map(part => (
                <Part key={part.id} name={part.name} exercise={part.exercises} />
            ))}
        </div>
    )

}

const Part = ({ name, exercise }) => {
    return (
        <p>
            {name} {exercise}
        </p>
    )
}

export default Content
