import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full flex flex-col xl:flex-row items-center justify-between text-center lg:text-left bg-blue rounded-2xl mb-20 mt-16 sm:mt-0 p-20 border-2 border-black'>
      <h1 className='font-medium'>Subscribe to our Newsletter</h1>
      <form className='flex flex-col xl:flex-row w-full md:w-1/2 xl:w-1/3 justify-center mt-4 xl:mt-0'>
        <div className='w-full'>
          <input type='email' id='email' placeholder='Your Email Goes Here' 
          className='p-2 rounded-lg bg-baby-blue border-2 border-fade-blue w-full'/>
        </div>
        <input type="submit" value='Submit' className='bg-white rounded-lg text-blue font-medium py-2 xl:py-0 sm:px-8 mt-2 xl:ml-4 xl:mt-0'/>
      </form>
    </div>
  )
}

export default Newsletter