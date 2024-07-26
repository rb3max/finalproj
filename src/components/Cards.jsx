import React, { useState } from 'react'
import Page from './Page'

const Cards = ({el,setshow,setselected}) => {
  
  return (
    <div className='card'>
      
      <img onClick={()=>(setshow(true),setselected(el))} src={el.img} alt="" />
      <h2>{el.name}</h2>
      <h3>
        
        {el.rate}
      </h3>
    </div>
  )
}

export default Cards
