import "./RicipeList.css";
import { Link } from "react-router-dom";

function RicipeList({ data }) {
  // if (data.length === 0) {
  //   return <div className='error' > No recipe by this name </div>
  // }

  return (
    <div className="recipe-list">
      {data &&
        data.map((recipe) => {
          return (
            <div className="card" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.ingredients}</p>
              <p>{recipe.method.substring(0, 50)}..</p>
              <Link to={`/recipe/${recipe.id}`}>Read More</Link>
            </div>
          );
        })}
    </div>
  );
}

export default RicipeList;
