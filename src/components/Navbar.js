import './Navbar.css'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
      <div className='navbar'>
          <nav>
              <Link to='/'>
                  <h1>ratatouille restaurant</h1>
              </Link>
              <Link to='/create'>Create New</Link>
          </nav>
    </div>
  )
}

export default Navbar