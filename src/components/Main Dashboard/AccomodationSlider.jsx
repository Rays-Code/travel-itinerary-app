import React from 'react'


const AccomodationSlider = () => {

    return (
      <div className="w-full sm:w-[353px] px-4 overflow-hidden text-[#333333]">
      <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2">
        {[1, 2, 3, 4, 5].map((item) => (

          <div key={item} className="w-[198px] h-[239px] rounded-[16px] border border-[#BFBFBF] bg-[#FDFBF7] flex items-center justify-center text-xl font-semibold text-white shrink-0">
            <div className='flex flex-col'>
              <div className='w-[198px] h-[238px] relative'>

                {/* review */}
              <div className='w-[73px] h-[16px] bg-[#3643FB] rounded-[2px] px-[2px] gap-[2px] absolute mt-28 ml-2 flex justify-center items-center'>
                <div className='font-montextralight text-[8px] text-[#F5F5F5] flex items-center justify-center gap-1'>
                  <img src='/assets/images/material-symbols-light_star.png' className='w-2 h-2'/>
                  <div className='mt-[2px]'>4.0 Very Good</div>
                  </div>
              </div>

              <img src='/assets/images/shinagawa-price-hotel.png' className='rounded-t-[16px] rounded-tr-[16px]'/>

              <div className='flex flex-col items-start text-black text-xs w-full gap-1 mt-2 ml-2'>
                <div className='font-montsemibold text-[#333333] text-sm'>Shinagawa Prince Hotel</div>

                <div className='flex'>
                <div className='font-mont text-[#333333] text-xs font-bold'>Check in: </div>
                <div className='font-montserratlight text-xs font-medium'>&nbsp;&nbsp;26.01.2025, 11:15 pm</div>
                </div>

                <div className='flex'>
                <div className='font-mont text-[#333333] text-xs font-bold'>Check out: </div>
                <div className='font-montserratlight text-xs font-medium'>&nbsp;&nbsp;28.01.2025, 11:15 am</div>
                </div>

                <div className='flex justify-between w-full mt-2'>
                  <div className='font-montsemibold text-[#333333] text-xs'>2 Nights</div>
                  <div className='flex items-center gap-[3px]'>
                    <div>
                      <img src='/assets/images/confirm-circle.png' />
                    </div>
                    <div className='font-montsemibold text-xs text-[#90EB61] mr-4'>Confirmed</div>
                  </div>
                </div>

              </div>

              </div>

    
            </div>
          </div>
        ))}
      </div>
    </div>
    )
}

export default AccomodationSlider