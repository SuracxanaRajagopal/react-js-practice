import React from 'react'

const Footer = ({legnthIs}) => {
const year=new Date();

  return (
    <footer>
      <p>{legnthIs} List  {legnthIs===1?"item":"items"} 
      <br/>Copyright &copy;{year.getFullYear()}</p>
    </footer>
  )
}

export default Footer
