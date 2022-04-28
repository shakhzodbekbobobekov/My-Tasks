import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Searchbar() {
  const [term, setTerm] = useState('')
  const navigate = useNavigate()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?q=${term}`)
    setTerm(' ')
  }

  return (
    <div className='searchbar'>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" placeholder='Search' onChange={ (e) => setTerm(e.target.value) } value={ term }/>
        </label>
      </form>
    </div>
  )
}

export default Searchbar