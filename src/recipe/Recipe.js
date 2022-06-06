import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useFetch } from "../components/hooks/useFetch";
import { projectFirestore } from "../components/firebase/config";
import "./Recipe.css";
function Recipe() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("recipes")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setData(doc.data());
        } else {
          setError("Xato bor okaxonlar");
          setIsPending(false);
        }
      });
  }, [id]);

  return (
    <div className="recipe">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h3>{data.title}</h3>

          {data.ingredients.map((ing) => {
            return (
              <span key={ing}>
                <small>{ing},</small>
              </span>
            );
          })}

          <p>{data.method}</p>
          <br />
          <h3>{data.cookingTime}</h3>
        </div>
      )}
    </div>
  );
}

export default Recipe;
