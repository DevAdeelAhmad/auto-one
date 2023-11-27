import React from 'react'
import Title from './sub/Title'
import SolutionContent from './sub/SolutionContent'

const Solutions = () => {
  return (
    <div className='flex flex-col w-full min-h-[50vh]  justify-center items-center pb-10 gap-y-10'>
      <Title title='The Solutions' />
      <SolutionContent />
    </div>
  );
}

export default Solutions