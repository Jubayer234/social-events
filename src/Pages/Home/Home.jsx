import React from 'react'
import Banner from '../Shared/Banner/Banner'
import Cards from '../Shared/Cards/Cards'
import { useLoaderData } from 'react-router-dom'

const Home = () => {

  const cards = useLoaderData()

  return (
    <div className=''> 
      <Banner></Banner>
      <div className='bg-[#FFDFE7]'>
      <Cards cards={cards}></Cards>
      </div>
    </div>
  )
}

export default Home