import React, { useState } from 'react'
import BtnRound from './BtnRound'
import Logo from './Logo'
import { IoMdMenu } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

export const Nav = () => {
  const[nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  
  return (
    <div className=''>
      <div className='relative flex justify-between items-center px-8 py-8'>
        <Logo />
        <nav className="hidden md:flex justify-center space-x-4
            text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4">
          <a href='/#'>Products</a>
          <a href='/#'>Pricing</a>
          <a href='/#'>FAQs</a>
          <a href='/#'>Solutions</a>
        </nav>
        <div className='hidden md:flex'>
          <BtnRound text={'Login'} fill={'fill'} link={'#'} />
          <BtnRound text={'Sign Up'} fill={'nofill'} link={'#'} />
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <IoMdMenu className='text-2xl md:hidden cursor-pointer' /> : <IoClose className='absolute text-2xl md:hidden cursor-pointer' />}
        </div>
      </div>
      <div className={!nav ? 'hidden' : 'md:hidden absolute top-0 left-0 h-screen w-full flex flex-col px-8 justify-center space-y-6 bg-white'}>
        <IoClose className='absolute top-10 right-8 text-2xl md:hidden cursor-pointer' onClick={handleClick}/>
        <nav className='flex flex-col text-5xl space-y-4
          font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>
          <a href='/#'>Products</a>
          <a href='/#'>Pricing</a>
          <a href='/#'>FAQs</a>
          <a href='/#'>Solutions</a>
        </nav>
      </div>
      
    </div>
  )
}
