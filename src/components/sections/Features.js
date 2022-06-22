import React from 'react'
import BtnRound from '../BtnRound'
import FeatureSingle from '../FeatureSingle'

const Features = () => {
  return (
    <div className='min-h-screen px-8 flex flex-grow flex-col-reverse md:flex-row bg-dark-blue text-white border-4 border-blue md:text-left'>
      <div className='flex flex-col flex-1 border justify-center items-center p-20 border-blue'>
        <div className='w-full h-full p-20 border-4 rounded-xl border-white'>
          <div className=' min-h-1/2 border-2 rounded-xl border-blue'>
            box
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col justify-center border border-white'>
        <div className=''>
          <h1 className='font-bold'>What makes Flow special.</h1>
          <FeatureSingle text={'Podcasts around all the latest topics'} />
          <FeatureSingle text={'Curated speakers'} />
          <FeatureSingle text={'Available on all platforms'} />
          <FeatureSingle text={'Easy to use interface so you can focus on creating'} />
          <BtnRound text={'Learn More'} />
        </div>
      </div>
    </div>
  )
}

export default Features