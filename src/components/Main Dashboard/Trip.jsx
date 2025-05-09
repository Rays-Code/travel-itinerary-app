import React from 'react';
import TripCardInfo from './TripCardInfo';

const Trip = () => {
  return (
    <div className='flex flex-col justify-start items-start w-full sm:w-[353px] gap-4'>
      <h3 className='w-[177px] h-[24px] text-lg font-montsemibold text-[#333333] font-bold ml-[18px]'>
        Your Upcoming Trip
      </h3>

      <div className='w-full flex justify-center sm:w-[353px]'>
        <div className='relative w-[353px] h-[330px]'>
          
          <div className='flex justify-between absolute w-full z-10'>
            <div>
              <div className='flex items-center'>
                <div className='font-moderniz text-4xl text-[#F5F5F5] pt-6 pl-6'>
                  TOKYO
                </div>
              </div>
              <div className='font-montserrat text-[#F5F5F5] pl-6'>
                27.01.2025 - 02.02.2025
              </div>
            </div>
            <div className='pt-4 pr-2'>
              <img src='/assets/images/right-arrow.png' className='w-12' />
            </div>
          </div>

          {/* Flipped image */}
          <img
            src='/assets/images/tokyo.png'
            className='w-[353px] h-[330px] rounded-[16px] transform -scale-x-100 origin-center z-0'
          />

          <TripCardInfo />
        </div>
      </div>
    </div>
  );
};

export default Trip;
