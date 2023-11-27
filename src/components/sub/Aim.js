import React from 'react'
import Title from './Title'
import AimContent from './AimContent'

const Aim = () => {
  return (
    <div className='flex flex-col xl:flex-row w-full min-h-[80vh] my-10 py-10 justify-evenly items-center heroBg bg-secondary'>
      <div className='flex flex-col flex-[0.2] gap-y-3 px-10 text-center sm:text-left'>
        <Title title='What We Aim' />
        <span className='text-base lg:text-lg text-tertiary pb-5'>We aim to let searching cars as easy task as ever through smart and innovation</span>
      </div>
      <div className='flex-[0.5] flex items-center justify-end'>
        <AimContent />
      </div>
    </div>
  )
}

export default Aim