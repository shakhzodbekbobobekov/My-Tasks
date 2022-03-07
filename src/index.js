import ReactDOM from "react-dom"
import React from "react"


// const date = new Date()
const currentTime = 99;

let textDate = '';
let styleColor = '';

if( currentTime < 12 ){
  textDate = 'Tong sahar';
  styleColor = 'red';
}else if( currentTime < 18 ){
  textDate = 'Tushlik vaqti';
  styleColor = 'yellow';
}else{
  textDate = 'Kechasi'
  styleColor = 'blue'
}


ReactDOM.render(
   <div>
     <h1 className="heading" style={styleColor} >
       {textDate}
      </h1> 
   </div>,
   document.getElementById('root'))