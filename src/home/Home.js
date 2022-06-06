import "./Home.css";
import RicipeList from "../components/RicipeList";
import { projectFirestore } from "../components/firebase/config";
import { useState, useEffect } from "react";

function Home() {
  // const { data, isPending, error } = projectFirestore()
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    projectFirestore
      .collection("recipes")
      .get()
      .then((snopshot) => {
        console.log(snopshot);
      });
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
