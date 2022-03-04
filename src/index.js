import ReactDOM from "react-dom"
import React from "react"



ReactDOM.render(
    React.createElement('div', '', 'hello', React.createElement( 'span', {}, 'ichma ich' ))
    , document.getElementById('root'))
