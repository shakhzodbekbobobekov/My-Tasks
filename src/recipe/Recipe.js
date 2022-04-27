import {useParams} from 'react-router-dom'
import {useFetch} from '../components/hooks/useFetch'
import './Recipe.css'

function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data } = useFetch(url)
  console.log(data);
  return (
    <div className='recipe'>
      { data && <div>
        <h3>{ data.title }</h3>      
      <ul>
        {
          data.ingredients.map((ing) => {
            return (
              <li key={ing}>{ing }</li>
            )
          })   
        }
      </ul>
      <p>{ data.method }</p>
      <br/>
      <h3>{ data.cookingTime }</h3>
      </div> }
    </div>
  )
}

export default Recipe