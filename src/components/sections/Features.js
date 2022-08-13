import React from 'react'
import BtnRound from '../BtnRound'
import FeatureSingle from '../FeatureSingle'

const Features = () => {
  return (
    <div className='min-h-screen px-8 flex flex-grow flex-col-reverse md:flex-row bg-dark-blue text-white md:text-left'>
      <div className='hidden flex flex-col flex-1 border justify-center items-center p-20 border-blue'>
        <div className='w-full h-full p-20 border-4 rounded-xl border-white'>
          <div className=' min-h-1/2 border-2 rounded-xl border-blue'>
            box
          </div>
        </div>
      </div>
      <div className='flex flex-1 flex-col items-center justify-center'>
        <div className=''>
          <h1 className='text-4xl md:text-6xl font-bold text-center md:text-left'>What makes Flow <span className='italic text-blue'>special</span>.</h1>
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