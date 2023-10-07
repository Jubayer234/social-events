import React from 'react'
import RightSideCard from './RightSideCard/RightSideCard'
import LeftSideCard from './LeftSideCard/LeftSideCard'
import MiddleCards from './MiddleCards/MiddleCards'

const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto text-center'>
      <LeftSideCard></LeftSideCard>
      <MiddleCards ></MiddleCards>
      <RightSideCard></RightSideCard>
    </div>
  )
}

export default Cards