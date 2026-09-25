import React from 'react'

const Card = (props) => {
  return (
    <div>
        <input type='text' onchange={(e)=> props.setName(e.target.value)}/>
        <p>Name state variable ki vlaue inside card :{props.name}</p>


       
      
    </div>
  )
}

export default Card
