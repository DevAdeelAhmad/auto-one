import React from 'react'
import Title from './sub/Title'
import DownloadPopup from './sub/DownloadPopup'

const Banner1 = () => {
  return (
    <div className='flex flex-col-reverse lg:flex-row w-[80%] h-full py-10 items-center gap-x-32 gap-y-10'>
      <div className='lg:w-[30%]'>
        <img src="/assets/banner1Image.png" alt="bannerImage" />
      </div>
      <div className='flex flex-col w-[100%] lg:w-[45%] justify-center gap-y-5 lg:gap-y-10'>
        <Title title='We Are Available On Android And Apple' />
        <span>We would be happy if you download our apps and register with us. we are waiting for you.</span>
        <DownloadPopup text="Download App Now" />
      </div>

    </div>
  )
}

export default Banner1