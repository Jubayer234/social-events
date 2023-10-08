import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import CardDetails from './cardDetails/CardDetails';

const Details = () => {

    const [card,setPhone] = useState({});

    const {id} = useParams();
    const cards = useLoaderData()
    useEffect(() => {
        const cardDetail = cards?.find(card => card.id == id )
        setPhone(cardDetail)

    },[id,cards])
 
    return (
    <div className='max-w-7xl mx-auto'><CardDetails card={card}></CardDetails></div>
  )
}

export default Details