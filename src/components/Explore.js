import React from 'react'
import Title from './sub/Title'
import DownloadPopup from './sub/DownloadPopup'

const Explore = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-center items-center min-h-[80vh] w-[90vw] lg:w-[80vw] gap-y-10 gap-x-10'>
      <div className='w-[90%] lg:w-[50%]'>
        <img src="/assets/explorePerson.png" alt="person" />
      </div>
      <div className='flex flex-col justify-center items-center lg:items-start gap-y-8 w-full lg:w-[50%]'>
        <Title title='Looking For A Car To Buy' />
        <span className='text-center text-tertiary'>Still didn't find options ? or you already know but you can't find the seller ? "</span>
        <DownloadPopup text={"Explore Now"} />
      </div>
    </div>
  )
}

export default Explore