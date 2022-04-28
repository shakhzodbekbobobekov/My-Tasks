import './App.css'

import Home from './home/Home'
import Create from './create/Create'
import Recipe from './recipe/Recipe'
import Navbar from './components/Navbar'
import Search from './search/Search'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/recipe/:id' element={<Recipe />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App