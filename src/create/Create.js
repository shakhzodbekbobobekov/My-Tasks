import './Create.css';
import { useState } from 'react'

function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setNewIngredients] = useState([])
  
  const hanleForm = (e) => {
    e.preventDefault()
    console.log(title, method, cookingTime);
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (newIngredient && !ingredients.includes(newIngredient)) {
      setNewIngredients((prev)=> [...prev,newIngredient])
    }
  }

  return (
    <form onSubmit={hanleForm} className='create'>
      <label>
        <span>Title:</span>
        <input type="text" required onChange={(e)=> setTitle(e.target.value)} />
      </label>

       <label>
        <span>Ingredients:</span>
        <div className='ingredients'>
          <input required type="text" onChange={(e) => setNewIngredient(e.target.value) } />
        <button onClick={handleClick}>Add</button>
        </div>
      </label>

      <label>
        <span>Method:</span>
        <textarea required onChange={(e)=> setMethod(e.target.value)}></textarea>
      </label>

      <label>
        <span>Cooking Time:</span>
        <input type="number" required onChange={(e)=> setCookingTime(e.target.value)} />
      </label>

      <button>Submit</button>
    </form>
  )
}

export default Create