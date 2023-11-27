import React from 'react'
import DownloadBtn from './sub/DownloadBtn'

const Banner2 = () => {
  return (
    <div className='w-full min-h-[80vh] flex items-center justify-center'>
      <div className='flex flex-col lg:flex-row bg-[#F7EFEA] w-[80%] min-h-[50vh] rounded-xl relative'>
        <div className='flex-[0.5] flex flex-col justify-center gap-y-10 ml-5 lg:ml-20'>
          <h1 className='text-3xl lg:text-5xl font-semibold'><span>Go Check Our Apps.</span><span className='leading-[1.2] text-transparent bg-clip-text bg-orange-600'>We Are Waiting For You!</span></h1>
          <DownloadBtn />
        </div>
        <div className='flex-[0.5]'>
          <img src="/assets/banner2Image.png" alt="Phones" className='absolute right-5 lg:right-10 bottom-10 h-[40%] lg:h-[80%] xl:h-[100%] object-cover' />
        </div>
      </div>
    </div>
  )
}

export default Banner2