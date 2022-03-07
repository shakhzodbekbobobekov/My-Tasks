import React from "react";
import Movies from "../movies";
import Card from "./Card"

const App = () => {
    return(
        <div>
            <Card  names={Movies[0].names} img={Movies[0].img} liked={Movies[0].liked} />
            <Card  names={Movies[1].names} img={Movies[1].img} liked={Movies[1].liked} />
             <Card  names={Movies[2].names} img={Movies[2].img} liked={Movies[2].liked} />
        </div>
    )
}

export default App;