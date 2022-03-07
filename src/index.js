import ReactDOM from "react-dom"
import React from "react"

const Card = (props) => {
  return (
    <div>
      <p>{props.names}</p>
      <img width={200} src={props.src} alt="cr7" />
      <p>{props.liked}</p>
    </div>
  )
}


ReactDOM.render(
  <div>
    <h1>Modern Best Movies</h1>

    <Card names='Cristiano Ronaldo (Man Utd)' src='https://picsum.photos/200/300?random=2' liked='98% ❤' />
    <Card names='Dostonbek' src='https://picsum.photos/200/300?random=1' liked='100% ❤' />
    <Card names='Bexruz uzb' src='https://picsum.photos/200/300?random=3' liked='100% ❤' />
  </div>,
  document.getElementById('root'))
