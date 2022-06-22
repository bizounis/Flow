import React from 'react'
import { BsRecordCircleFill } from 'react-icons/bs'

const PricingCardFeat = ({text, hidden}) => {
  if(!hidden){  
    return (
      <div className='flex items-center'>
        <BsRecordCircleFill className='text-sm'/>
        <h4 className='ml-2 text-lg'>{text}</h4>
      </div>
    )
    }else{
      return (
        <div className='flex items-center'>
          <BsRecordCircleFill className='text-sm opacity-50'/>
          <h4 className='ml-2 line-through opacity-70'>{text}</h4>
        </div>
      )
    }
}

export default PricingCardFeat