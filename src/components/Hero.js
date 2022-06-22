import React from 'react'
import BtnRound from './BtnRound'
import introimg1 from '../assets/podcast1.jpg'
import introimg2 from '../assets/podcast2.jpg'

const Hero = () => {
  return (
    <div className='px-8 flex flex-grow flex-col md:flex-row border text-center md:text-left'>
      <div className='flex flex-col flex-1 border pt-10 justify-evenly'>
        <h1 className='md:text-8xl font-bold leading-snug'>
          Step into the world of podcast with <span className='underline decoration-wavy decoration-blue'>Flow</span>.
        </h1>
        <p className=' text-2xl text-gray'>Create, share and monetize your podcast all in one place!</p>
        <div className=''>
          <BtnRound text={'Listen'}/>
          <BtnRound text={'Discover'}/>
        </div>
      </div>
      <div className='hidden sm:flex flex-1 justify-center items-center border border-blue'>
        <div className='grid grid-rows-6 grid-flow-col gap-3 p-10 h-full w-full '>
            <img src={introimg1} alt='podcast' className='row-span-5 rounded-[25px]'/>
          <div className='row-span-1 border'>
            2
          </div>
          <div className='row-span-1'>
            <p className='border rounded-[25px] p-4'>Listen to a wide selection of podcasts from your favorite creators, be inspired and explore. Anywhere, from any device and any time you want, without limits.</p>
          </div>
          <div className='row-span-5'>
            <img src={introimg2} alt='podcast' className='rounded-[25px]'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero