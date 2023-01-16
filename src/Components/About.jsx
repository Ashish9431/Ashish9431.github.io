import React from 'react';

const About = () => {
  return (
    <div id="about" name='about' className=' h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p id="about1" className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div id="upper" className='sm:text-right text-4xl font-bold'>
              <p className='scale-up-hor-right'>Hi. I'm Ashish, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p id="mainabout">A passionate programmer with ability to learn quickly and implement and
also versatile enough to learn and work in new environment. Currently
looking for an opportunity to work for an organization where I can
contribute my skills and manage key projects that impact the organization.
              
              </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
