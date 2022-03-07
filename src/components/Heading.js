import React from "react";

const date = new Date()
const currentTime = date.getHours();


let textDate = '';
let styleColor = {
    color: ''
};

if( currentTime < 12 ){
  textDate = 'Tong sahar';
  styleColor.color = 'red';
}else if( currentTime < 18 ){
  textDate = 'Tushlik vaqti';
  styleColor.color = 'yellow';
}else{
  textDate = 'Kechasi'
  styleColor.color = 'blue'
}


const Heading = () => {
    return(
        <h1 style={styleColor}> {textDate}  </h1>
    );
};

export default Heading;