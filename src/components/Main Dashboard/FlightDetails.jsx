import React from 'react'

// ml-5 mt-3

const FlightDetails = () => {
  return (
    <div className='bg-[#3643FB] w-[353px] h-[124px] rounded-[16px] mx-[20px] flex justify-between'>
  <div className='flex flex-col  w-[341px] h-[105px] p-1 bg-[#313DDF] rounded-[12px] m-2'>

    <div className='flex justify-between'>
    <div className='flex flex-col text-[#F5F5F5]'>
      <div className='font-montsemibold ont-bold'>Flight Details</div>
      <div className='font-monserrat text-sm'>26.01.2025, 10:50 am</div>
    </div>
    <div className='underline font-mont font-extrabold text-[10px] text-[#D1F462] mr-1'>See all</div>
    </div>
    

    <div className='flex justify-between items-center gap-4 mt-2'>
      <div className='flex flex-col text-[#F5F5F5]'>
        <div className='font-montsemibold'>DEL</div>
        <div className='text-xs'>Delhi, India</div>
      </div>

      <div>
        <img src='/assets/right-arrow.png' className='rotate-[45deg] mt-1 w-full h-auto' />
      </div>

      <div className='flex flex-col text-[#F5F5F5] mr-30'>
        <div className='font-montsemibold'>NRT</div>
        <div className='text-xs'>Narita, Japan</div>
      </div>


    </div>
  </div>

  <div className='absolute'>
        <img src='/assets/Plane.png' className='w-50 ml-38 mt-3 scale-100'/>
  </div>
</div>

  )
}

export default FlightDetails