/* eslint-disable react/prop-types */
export const Button = (props) => {
  return (
    <button style={{ margin: '0 1em' }} onClick={props.handleClick}>
      {props.name}
    </button>
  )
}
