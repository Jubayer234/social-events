import React from 'react'

const CardDetails = ({ card }) => {


    const { id, name, image, price, description, color } = card || {}

    return (
        <div className='mt-20'>
            <div style={{ backgroundColor: color }} className="card w-1/2 mx-auto bg-base-100 shadow-xl">
                <figure className=" px-2 py-2 ">
                    <img src={image} alt="" className="rounded-xl w-full " />
                </figure>
                <div className="card-body items-center text-center text-white">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-xl mb-2 mt-2'>Price : {price}</p>
                    <p>{description}</p>
                    <div className="card-actions">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails