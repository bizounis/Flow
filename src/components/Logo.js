import React from 'react'
import logo from '../assets/flow.png'

const Logo = () => {
  return (
    <div className='flex items-center justify-center lg:justify-start'>
      <img src={logo} alt='flow' className='cursor-pointer'/>
      <h2 className='font-bold ml-3'>Flow</h2>
    </div>
  )
}

export default Logo