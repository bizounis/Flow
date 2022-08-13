import React from 'react'
import {BsThreeDots, BsPlayCircle} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'


const PodPreviewSingle = ({creatorAv, creatorName, podCover, podName, podEps, podDur }) => {
  return (
    <div className='flex flex-col p-8 border-2 rounded-2xl border-gray-light m-6 shadow-lg'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center'>
          <img src={creatorAv} alt={creatorName} className='w-14 h-1/2 rounded-[50px]' />
          <a href='/#' className='ml-3 '>{creatorName}</a>
        </div>
      </div>
      <img src={podCover} alt={podName} className='rounded-2xl my-4 object-cover' />
      <div className='flex sm:block md:flex justify-between items-center md:text-left'>
        <div className='flex flex-col w-full'>
          <h3 className='font-bold'>{podName}</h3>
          <div className='w-full flex items-center justify-between text-gray'>
            <div className='flex items-center sm:flex-col md:flex-row'>  
              <p>{podEps} Eps</p>
              <GoPrimitiveDot className='opacity-20 sm:ml-1' />
              <p className='sm:ml-1'>{podDur} min</p>
            </div>
            <BsPlayCircle className='h-1/2 w-1/6 text-blue font-bold cursor-pointer' />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default PodPreviewSingle