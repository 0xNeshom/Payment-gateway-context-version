import React from 'react'


const Card = ({card}) => {
    
    const { name, cardNumber, month, year, cvc, balance } = card;
  return (
    <div className="w-[400px] bg-card-gradient p-5 h-52 text-white mt-2 rounded-xl flex-shrink-0 mr-12">
    <div className=" mx-1.5">
      <div className="flex justify-between items-center mt-1 ">
        <div>{name}</div>
        <div>
          <span className="">Payment Service</span>
        </div>
      </div>
      <div className="justify-center flex my-6 text-lg tracking-widest">{cardNumber}</div>
      <div className="flex justify-between">
        <div>CVV2: {cvc}</div>
        <div cla>
          Exp: {month}-{year}</div>

      </div>
      <div className="flex justify-center mt-3">Balance: {balance}</div>
    </div>
  </div>
  )
}

export default Card
