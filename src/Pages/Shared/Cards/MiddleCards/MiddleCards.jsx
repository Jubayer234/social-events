import React from 'react'
import { Link } from 'react-router-dom'

const MiddleCards = ({card}) => {

    const {id,name,image,price,description,color} = card || {};



  return (
    <div>
        <div style={{backgroundColor : color}} className="card w-[328px] bg-base-100 shadow-xl">
  <figure className=" px-2 py-2 ">
    <img src={image} alt="" className="rounded-xl h-[210px] " />
  </figure>
  <div className="card-body items-center text-center text-white">
    <h2 className="card-title">{name}</h2>
    <p className='text-xl mb-2 mt-2'>Price : {price}</p>
    <p>{description}</p>
    <div className="card-actions">
      <Link to={`/details/${id}`}><button className="btn bg-grey-200 ">See Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}

export default MiddleCards