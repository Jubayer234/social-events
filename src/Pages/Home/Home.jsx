import React from 'react'
import Banner from '../Shared/Banner/Banner'
import Cards from '../Shared/Cards/Cards'
import { useLoaderData } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Satisfaction from '../Shared/Satisfaction/Satisfaction'
import EventNumber from '../Shared/EventNumber/EventNumber'

const Home = () => {

  const cards = useLoaderData()

  return (
    <div> 
      <Banner></Banner>
      <div className='bg-[#FFDFE7]'>
      <Cards cards={cards}></Cards>
      </div>
      <EventNumber></EventNumber>
      <Satisfaction></Satisfaction>
      <Footer></Footer>
    </div>
  )
}

export default Home