import React from 'react'

const BtnRound = ({text, link, fill}) => {
  if(fill === 'nofill'){
    return (
      <button className='text-white hover:text-blue bg-blue hover:bg-white py-3 px-5 rounded-full border-2 border-blue font-medium mx-1'>
        <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
        </a>
      </button>
    )
  }else{
    return (
      <button className='text-blue hover:text-white hover:bg-blue py-3 px-5 rounded-full border-2 border-blue font-medium mx-1'>
        <a href={link} aria-label={text} target="_blank" rel="noreferrer">
        {text}
        </a>
      </button>
    )
  }
  
}

export default BtnRound