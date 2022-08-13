import React, { useRef, useEffect } from 'react'
import { Power3 } from 'gsap'

import BtnRound from './BtnRound'

import introimg1 from '../assets/podcast1.jpg'
import introimg2 from '../assets/podcast2.jpg'
import { gsap } from 'gsap'

const Hero = () => {

  const toptext = useRef(null);
  const bottomtext = useRef(null);
  const leftimage = useRef(null);
  const rightimage = useRef(null);

  

  return (
    <div className='px-8 flex flex-grow flex-col xl:flex-row text-center xl:text-left'>
      <div className='flex flex-col flex-1 pt-10 justify-center md:items-left'>
        <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold leading-snug'>
          Step into the world of podcast with <span className='underline decoration-wavy decoration-blue'>Flow</span>.
        </h1>
        <p className='py-8 text-2xl text-gray'>Create, share and monetize your podcast all in one place!</p>
        <div className='-mt-4 -ml-1'>
          <BtnRound text={'Listen'}/>
          <BtnRound text={'Discover'}/>
        </div>
      </div>
      <div className='hidden sm:flex flex-1 justify-center h-max items-center'>
        <div className='grid grid-rows-6 grid-flow-col gap-3 p-10 h-full w-full '>
          <img src={introimg1} ref={leftimage} alt='podcast' className='h-full w-full row-span-5 rounded-[25px] object-cover'/>
          <div className='row-span-1' ref={bottomtext}>
            <p className='border rounded-[25px] p-4'>Listen to a wide selection of podcasts from your favorite creators, be inspired and explore. Anywhere, from any device and any time you want, without limits.</p>
          </div>
          <div className='row-span-1' ref={toptext}>
            <p className='border rounded-[25px] p-4'>Listen to a wide selection of podcasts from your favorite creators, be inspired and explore. Anywhere, from any device and any time you want, without limits.</p>
          </div>
          <div className='row-span-5' ref={rightimage}>
            <img src={introimg2} alt='podcast' className='h-full w-full rounded-[25px] object-cover'/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero