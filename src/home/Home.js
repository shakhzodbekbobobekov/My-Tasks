import "./Home.css";
import RicipeList from "../components/RicipeList";
import { projectFirestore } from "../components/firebase/config";
import { useState, useEffect } from "react";

function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const unSub = projectFirestore
      .collection("recipes")
      .onSnapshot((snapshot) => {
        if (snapshot.empty) {
          setError("No recipe to yet !");
          setIsPending(false);
        } else {
          const results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ ...doc.data(), id: doc.id });
          });
          setData(results);
          setIsPending(false);
        }
      });
    return () => unSub();
  }, []);

  return (
    <div className="home">
      {isPending && <div>Loading....</div>}
      {error && <div>{error}</div>}
      <RicipeList data={data} />
    </div>
  );
}

export default Home;
