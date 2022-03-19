import React, { useState, useEffect } from 'react'
import cardData from "../api/cards.json"
import CardCall from '../ui/CardCall'
export default function Cards() {
  const [card, setCard] = useState([])

  useEffect(() => {
    //request api
    setCard(cardData)
  }, [])


  return (


    <div className='container mx-auto  '>
      <div className='grid grid-cols-3 gap-x-4 items-center text-center pt-14 pb-10'>
        {card.length && card.map( (cardData, index)=> <CardCall key={index} cardData={cardData} /> )}
      </div>
    </div>
  )
}
