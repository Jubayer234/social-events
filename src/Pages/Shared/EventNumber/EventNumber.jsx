import React from 'react'
import { FaCalendarDay, FaGlobeAsia, FaUser } from 'react-icons/fa';

const EventNumber = () => {
    return (
        <div className='max-w-7xl mx-auto md:w-3/4 mt-5 mb-5 p-12 bg-gradient-to-bl from-pink-200 to-red-400 rounded-xl text-white'>
            <div>
                <h2  className='text-center text-3xl mb-12 border-b pb-5'>Backstage by the numbers</h2>
                <div className='flex justify-center md:text-3xl items-center gap-20'>
                    <p><FaCalendarDay></FaCalendarDay> 50,000+ <br />
                        events</p>
                    <p> <FaGlobeAsia></FaGlobeAsia> 150+ <br />
                        countries </p>
                    <p><FaUser></FaUser> 1.2M+ <br />
                        attendees</p>
                </div>
            </div>
        </div>
    )
}

export default EventNumber