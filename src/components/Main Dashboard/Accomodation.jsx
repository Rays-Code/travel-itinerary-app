import React from 'react'
import AccomodationSlider from "./AccomodationSlider.jsx"

const Accomodation = () => {
  return (
    <div className='flex flex-col justify-start items-start w-full sm:w-[353px] gap-4'>
      <div className='flex justify-between w-full sm:w-[353px]'>
      <h3 className='w-[177px] h-[24px] text-lg font-montsemibold text-[#333333] font-bold ml-[19px]'>
        Accomodation
      </h3>
      <div className='underline font-mont font-extrabold text-[10px] text-[#D1F462] mr-[18px] mt-2'>See all</div>
      </div>


      
      <AccomodationSlider />
  
    </div>
  )
}

export default Accomodation