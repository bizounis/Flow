import React from 'react'
import {BsStars} from 'react-icons/bs'
import PricingCardFeat from './PricingCardFeat'

const PricingCard = ({theme, planPeriod, basicPlanPrice, premiumPlanPrice}) => {
  if(theme==='solid'){
  return (
    <div className='lg:w-1/2 xl:w-1/4 p-16 m-5 bg-blue text-white border-2 border-blue rounded-2xl shadow-lg space-y-6 divide-y-2 divide-black divide-opacity-50'>
      <div className='text-center space-y-3'>
        <div className='inline-block py-2 px-4 bg-white text-blue rounded-full'>
          <div className='flex items-center'>
            <BsStars className='text-black mr-2'/>
            <p className='font-medium'>Premium Plan</p>
          </div>
        </div>
        <h1 className='text-6xl font-bold'>${premiumPlanPrice}</h1>
        <p className='opacity-30'>Per {planPeriod}</p>
        <p className='opacity-50 px-4'>In this case, you buy a subscription to use the basic features of flow.</p>
      </div>
      <div>
        <PricingCardFeat text={'Access To Podcasts'}/>
        <PricingCardFeat text={'Live Customer Support'}/>
        <PricingCardFeat text={'Access Premium Podcasts'}/>
        <PricingCardFeat text={'Publish & Monetize Podcasts'}/>
      </div>
    </div>
  )
  }else{
    return (
      <div className='lg:w-1/2 xl:w-1/4 p-16 m-5 text-black border-2 border-black rounded-2xl shadow-lg space-y-6 divide-y-2 divide-black divide-opacity-50'>
        <div className='text-center space-y-3'>
          <div className='inline-block py-2 px-4 bg-gray-light text-blue rounded-full'>
            <div className='flex items-center'>
              <p className='font-medium'>Basic Plan</p>
            </div>
          </div>
          <h1 className='text-6xl font-bold'>${basicPlanPrice}</h1>
          <p className='opacity-30'>Per {planPeriod}</p>
          <p className='opacity-50 px-4'>In this case, you buy a subscription to use the basic features of flow.</p>
        </div>
        <div>
          <PricingCardFeat text={'Access To Podcasts'}/>
          <PricingCardFeat text={'Live Customer Support'}/>
          <PricingCardFeat text={'Access Premium Podcasts'} hidden={'true'}/>
          <PricingCardFeat text={'Publish & Monetize Podcasts'} hidden={'true'}/>
        </div>
      </div>
    )
  }
}

export default PricingCard