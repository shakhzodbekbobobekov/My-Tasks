''

import './RicipeList.css'

import React from 'react'

function RicipeList({data}) {
  return (
    <div className='recipe-list'>
      { data && data.map((recipe) => {
        return (
          <div className='card'>
            <h3></h3>
          </div>
        )
      })}
    </div>
  )
}

export default RicipeList