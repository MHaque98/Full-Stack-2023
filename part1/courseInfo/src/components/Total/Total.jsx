/* eslint-disable react/prop-types */
export const Total = ({ total }) => {
  const totalExercises = total.reduce(
    (sum, course) => sum + course.exercises,
    0,
  )
  console.log(totalExercises)
  return <h3>Number of exercises: {totalExercises}</h3>
}
