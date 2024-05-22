import React from 'react'

const Hader = (props) => {
  return (
    <header>
    <h1> {props.title} </h1>
    </header>
  )
}
Hader.defaultProps={title:"practice"}
export default Hader
