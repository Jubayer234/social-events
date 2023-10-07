import React from 'react'
import MiddleCards from './MiddleCards/MiddleCards'

const Cards = ({cards}) => {

  return (
    <div>
      <h2 className=' pt-5 text-center bg-gradient-to-r p-5 from-[#F86486] to-[#fda1b8] text-4xl'>Our Services</h2>
     <div className='grid md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto p-12 md:p-8 gap-5'>
      {
        cards?.map(card => <MiddleCards key={card.id} card={card}></MiddleCards>)
      }
     </div>


    </div>
  )
}

export default Cards