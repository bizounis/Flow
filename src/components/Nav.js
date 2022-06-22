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
      <div className='flex justify-between items-center px-8 py-8'>
        <Logo />
        <nav className="hidden md:flex justify-center space-x-4">
          <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Products</a>
          <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Pricing</a>
          <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>FAQs</a>
          <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Solutions</a>
        </nav>
        <div className='hidden md:flex'>
          <BtnRound text={'Login'} fill={'fill'} link={'#'} />
          <BtnRound text={'Sign Up'} fill={'nofill'} link={'#'} />
        </div>
        <div className='md:hidden' onClick={handleClick}>
          {!nav ? <IoMdMenu className='text-2xl md:hidden cursor-pointer' /> : <IoClose className='text-2xl md:hidden cursor-pointer' />}
        </div>
      </div>
      <nav className={!nav ? 'hidden' : 'md:hidden h-50 flex flex-col px-8 justify-center space-y-6'}>
        <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Products</a>
        <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Pricing</a>
        <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>FAQs</a>
        <a href='/#' className='text-xl font-medium text-gray hover:text-blue hover:underline decoration-black hover:underline-offset-4'>Solutions</a>
      </nav>
    </div>
  )
}
