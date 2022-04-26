import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link className='brand'>
          <h1>RATATOUILLE</h1>
        </Link>
        <Link to='/'>Read More</Link>
      </nav>
    </div>
  )
}

export default Navbar