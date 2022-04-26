import './Navbar.css'

import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>RATATOUILLE</h1>
        </Link>
        <Link to='/create'>Now create</Link>
      </nav>
    </div>
  )
}

export default Navbar