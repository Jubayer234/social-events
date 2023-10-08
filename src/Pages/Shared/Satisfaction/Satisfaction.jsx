import React from 'react';
import satisfactionJpg from '../../../assets/satisfaction.webp'

const Satisfaction = () => {
    return (
        <div className='max-w-7xl mx-auto md:flex justify-between items-center lg:h-[800px]'>
            <div>
                <div className='lg:w-[450px] rounded-t-full absolute lg:mt-[10px] bg-[#FFDFE7] h-[600px]'>
                </div>
                <img className='relative lg:ml-10 lg:w-3/4 lg:h-[580px] lg:rounded-t-full' src={satisfactionJpg} alt="" />
            </div>
            <div className='font-serif space-y-5 lg:bg-[#FFDFE7] p-16'>
                <h2 className='text-center text-3xl lg:text-5xl font-medium'>Satisfaction Guaranteed</h2>
                <p className='text-xl lg:text-2xl font-medium text-center'>Outstanding Quality</p>
                <p className='text-center lg:text-lg'>All social Events by us, we believe in creating unique <br /> moments that leave a lasting impression. What differentiates us <br /> from our competitors is that we listen to our clients, <br /> creating unique events tailored to their specific needs and desires. <br /> Our innovative mix of solutions ensures that every detail is covered.</p>
            </div>

        </div>
    )
}

export default Satisfaction;