import React from 'react'

// two different syntaxes

/* const Button = (props) => {
  return (
    <button className={props.color}
      onClick={
        () => props.setColor(props.color)
      }>
      {props.color}
    </button>
  )
} */
/* 
const Button = ({ color, setColor }) => {
  return (
    <button style={{backgroundColor : color}}
      onClick={
        () => setColor(color)
      }>
      {color}
    </button>
  )
}
 */
const Button = ({ color, setColor }) => {
  return (
    <button className='text-white hover:text-lg font-bold p-2 rounded-md border-4' style={{ backgroundColor: color }}
      onClick={
        () => setColor(color)
      }>
      {color}
    </button>
  )
}
export default Button;
