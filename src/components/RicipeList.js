''

import './RicipeList.css'
import { Link } from 'react-router-dom'

function RicipeList({data}) {
  return (
    <div className='recipe-list'>
      { data && data.map((recipe) => {
        return (
          <div className='card' key={recipe.id}>
            <h3>{ recipe.title }</h3>
            <p>{ recipe.ingredients }</p>
            <div>{ recipe.method.substring(0,50) }..</div>
            <Link to='/'>Read More</Link>
          </div>
        )
      })}
    </div>
  )
}

export default RicipeList