import "./RicipeList.css";
import { Link } from "react-router-dom";
import { projectFirestore } from "../components/firebase/config";

const deleteRecipe = (id) => {
  projectFirestore.collection("recipes").doc(id).delete();
};
function RicipeList({ data }) {
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
              <span className="delete" onClick={() => deleteRecipe(recipe.id)}>
                <img src="./assets/trash.svg" alt="deleteIcon" />
              </span>
            </div>
          );
        })}
    </div>
  );
}

export default RicipeList;
