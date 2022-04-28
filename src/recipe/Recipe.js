import {useParams} from 'react-router-dom'
import {useFetch} from '../components/hooks/useFetch'
import './Recipe.css'

function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data, isPending, error } = useFetch(url)
  return (
    <div className='recipe'>
      {isPending && <div>Loading...</div>}  
      { error && <div>{ error }</div> }
      
      { data && <div>
        <h3>{ data.title }</h3>      
      {/* <ul> */}
        {
          data.ingredients.map((ing) => {
            return (
              <span key={ ing }>
                <small>
                  {ing}, 
                </small>
              </span>
            )
          })   
        }
      {/* </ul> */}
      <p>{ data.method }</p>
      <br/>
      <h3>{ data.cookingTime }</h3>
      </div> }
    </div>
  )
}

export default Recipe