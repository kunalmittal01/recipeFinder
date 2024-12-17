import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <nav className="navbar">
        <p><NavLink to="/" className={({isActive, isPending})=>isActive?"active":"" } >Home</NavLink></p>
        <p><NavLink to="/contacts">Contacts</NavLink></p>
        <p><NavLink to="/about">About</NavLink></p>
        <p><NavLink to="/favorities">Favorities</NavLink></p>
    </nav>
    </>
  )
}

export default Navbar