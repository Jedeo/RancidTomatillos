import React from 'react'

const Navbar = ({home}) => {
 // console.log(home);
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
      <form style={{margin: 10}}>
        <input style={{margin: 10}} />
        <button>Search</button>
      </form>
    </nav>
  )
}

export default Navbar
