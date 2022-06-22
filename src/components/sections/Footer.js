import React from 'react'
import Logo from '../Logo'
import Newsletter from '../Newsletter'
import { IoMailOpenOutline } from 'react-icons/io5'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineInstagram } from 'react-icons/ai'
import { TbBrandTwitter } from 'react-icons/tb'
import { RiFacebookCircleFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='px-4 md:px-8 flex flex-grow flex-col-reverse md:flex-row bg-dark-blue text-white md:text-left'>
      <div className='flex flex-col flex-1 justify-center sm:p-20 items-center'>
        <Newsletter />
        <div className='w-full flex flex-col lg:flex-row justify-between text-center lg:text-left px-16'>
          <div className='my-auto'>
            <Logo />
            <p className='opacity-50'>Create, share and monetize your Podcasts all in one place.</p>
          </div>
          <div className=''>
            <h2 className='font-medium opacity-60 mb-2'>Services</h2>
            <ul className='space-y-2'>
              <li><a href='#' className='text-white font-medium'>About Us</a></li>
              <li><a href='#' className='text-white font-medium'>Contact Us</a></li>
              <li><a href='#' className='text-white font-medium'>Features</a></li>
              <li><a href='#' className='text-white font-medium'>Blog</a></li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-medium opacity-60 mb-2'>Resources</h2>
            <ul className='space-y-2'>
              <li><a href='#' className='text-white font-medium'>Apps</a></li>
              <li><a href='#' className='text-white font-medium'>Developer</a></li>
              <li><a href='#' className='text-white font-medium'>Integration</a></li>
              <li><a href='#' className='text-white font-medium'>Pricing</a></li>
            </ul>
          </div>
          <div className=''>
            <h2 className='font-medium opacity-60 mb-2'>Contact</h2>
            <div className='space-y-2'>
              <div className='flex items-center justify-center lg:justify-start space-x-2'>
                <IoMailOpenOutline />
                <p>hello@flow.com</p>
              </div>
              <div className='flex items-center justify-center lg:justify-start space-x-2'>
                <FiPhoneCall />
                <p>+1(303)-909-808</p>
              </div>
              <div className='flex items-center justify-center lg:justify-start space-x-2 text-3xl'>
                <AiOutlineInstagram className='hover:text-blue'/>
                <TbBrandTwitter />
                <RiFacebookCircleFill />
              </div>
              
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col md:flex-row items-center justify-center md:justify-between border-t-2 mt-4 border-gray'>
          <p className='opacity-80 mt-2'>&copy; Flow 2022. All rights reserved</p>
          <p className='opacity-80 mt-2'>Coded by Chris Christodoulou</p>
        </div>
      </div>
    </div>
  )
}

export default Footer