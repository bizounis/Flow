import React from 'react'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'

const FeatureSingle = ({text}) => {
  return (
    <div className='flex items-center py-6'>
      <IoMdCheckmarkCircleOutline className='text-blue text-2xl'/>
      <h3 className='ml-2 font-medium'>{text}</h3>
    </div>
  )
}

export default FeatureSingle