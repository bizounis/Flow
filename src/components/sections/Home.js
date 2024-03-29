import React from 'react'
import Hero from '../Hero'
import { Nav } from '../Nav'

const Home = () => {
  return (
    <>
      <div className='min-h-screen flex flex-col'>
        <Nav />
        <Hero />
      </div>
    </>
  )
}

export default Home