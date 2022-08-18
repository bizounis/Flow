import React from 'react'
import revAv from '../../assets/philip.png'

const Reviews = () => {
  return (
    <div className='p-6 sm:px-8 flex flex-grow flex-col-reverse md:flex-row bg-fade-blue md:text-left'>
      <div className='flex flex-col flex-1 justify-center sm:p-20 items-center'>
        <h1 className='text-center mt-8 md:mt-0 mb-4 text-6xl font-bold'>What did our users say about us.</h1>
        <p>Lorem ipsum dolor sit amet</p>
        <div className='w-full flex-col md:flex-row lg:flex items-center justify-center p-10 text-white bg-blue overflow-hidden rounded-[25px]'>
          <img src={revAv} alt='review' className='w-60 m-auto rounded-full border-8 border-baby-blue object-cover ' />
          <div className='w-full p-10 lg:mt-0'>
            <h3 className='sm:text-center lg:text-left'>After using Flow daily as a listener I decided to try and start my own podcast. The experience was seamless and my first podcast was distributed in seconds. Flow is awesome.</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews