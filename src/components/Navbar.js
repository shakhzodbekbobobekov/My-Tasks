import './Navbar.css'
import Searchbar from './Searchbar'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <Link to='/' className='brand'>
          <h1>RATATOUILLE</h1>
        </Link>
        <Searchbar />
        <Link to='/create'>Now create</Link>
      </nav>
    </div>
  )
}

export default Navbar