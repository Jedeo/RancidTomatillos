import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'

const Navbar = ({home, handleSearch, hidden}) => {
  const navStyle = {
    border: "1px solid",
    margin: 10,
    width: "70vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"

  }

  return (
    <nav style={navStyle}>
      <h1 onClick={() => {home()}} style={{marginLeft: 10}}>Rotten Tomatillos</h1>
     <Form handleSearch={handleSearch} hidden={hidden}/>
    </nav>
  )
}

export default Navbar
