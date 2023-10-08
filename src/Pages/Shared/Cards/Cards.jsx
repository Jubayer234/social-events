import React from 'react'
import MiddleCards from './MiddleCards/MiddleCards'
import anotherLogo from '../../../assets/another-logo.png'

const Cards = ({cards}) => {

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex justify-center items-center'>
      <h2 className='pt-7 mb-10 text-center text-4xl font-serif font-medium border-b border-black pb-5'>Our Services</h2>
      <img className='w-48 absolute mt-3 md:ml-[350px]' src={anotherLogo} alt="" />
      </div>
      
     <div className=' grid md:grid-cols-2 lg:grid-cols-3 p-12 md:p-8 gap-5'>
      {
        cards?.map(card => <MiddleCards key={card.id} card={card}></MiddleCards>)
      
      }
     </div>


    </div>
  )
}

export default Cards