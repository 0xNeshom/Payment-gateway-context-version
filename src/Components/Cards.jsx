import React, { useContext } from 'react'
import Card from './Card'
import { Cardcontext } from '../App'

const Cards = () => {
    const{Data} = useContext(Cardcontext);
  return (
    <div className='mt-12 overflow-y-scroll h-[600px]'>
      {Data.map((card,index)=>(
        <Card key={index} card={card}/>
      ))}
    </div>
  )
}

export default Cards
