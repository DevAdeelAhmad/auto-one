import React from 'react';
import { SolutionData } from '../../Data/Data.ts';
import SubTitle from './SubTitle.js'

const SolutionContent = () => {
  return (
    <div className='flex flex-wrap items-center justify-center w-[90%] gap-20'>
      {SolutionData.map((data) => (
        <div className='flex flex-col justify-center p-7 sm:p-10 w-[400px] h-[200px] heroBg rounded-lg cursor-default hover:shadow-lg bg-secondary gap-x-10' key={data.key}>
          <SubTitle title={data.title} />
          <span className='text-tertiary text-base'>{data.description}</span>
        </div>
      ))}
    </div>
  );
};

export default SolutionContent;
