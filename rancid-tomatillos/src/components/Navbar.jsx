import React from 'react'
import Form from './Form'
import {Link} from 'react-router-dom'
import './Navbar.css'
import potato from '../images/potato-three.png'

const Navbar = ({home, handleSearch}) => {

  return (
    <section className="navSection">
      <nav className="mainNav">
        <img className="potatoImg" onClick={() => {home()}} src={potato} alt="Potato Logo" />
        <Link to="/"> <h1 className="header" >P E T R I F I E D <br /> P O T A T O</h1> </Link>
      </nav>
    </section>
  )
}

export default Navbar
