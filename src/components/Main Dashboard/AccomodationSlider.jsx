import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const AccomodationSlider = () => {

  const navigate = useNavigate()

  const [hotelList, setHotelList] = useState([{
    id: 1,
    review: "4.0 Very Good",
    name: "Shinagawa Prince Hotel",
    image: "/assets/images/shinagawa-price-hotel.png",
    checkInTime: "26.01.2025, 11:15 pm",
    checkoutOutTime: "28.01.2025, 11:15 am",
    duration: "2 Nights",
    status: "Confirmed",
    statusLogo: "/assets/images/confirm-circle.png"
  },
  {
    id: 2,
    review: "4.1 Very Good",
    name: "Mercure Tokyo Hotel",
    image: "/assets/images/mercure-tokyo-hotel.png",
    checkInTime: "28.01.2025, 6:00 pm",
    checkoutOutTime: "30.01.2025, 11:15 am",
    duration: "2 Nights",
    status: "Pending",
    statusLogo: "/assets/images/pending-circle.png"
  },
  {
    id: 3,
    review: "4.3 Very Good",
    name: "Kangaroo Tokyo Hotel",
    image: "/assets/images/kangaroo-hotel-tokyo.jpg",
    checkInTime: "26.01.2025, 12:30 pm",
    checkoutOutTime: "28.01.2025, 11:25 am",
    duration: "2 Nights",
    status: "Confirmed",
    statusLogo: "/assets/images/confirm-circle.png"
  }])


    return (
      <div className="w-full sm:w-[353px] px-4 overflow-hidden text-[#333333]">
      <div className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2">
        {hotelList.map((hotel) => (

          <div key={hotel.id} className="w-[198px] h-[239px] rounded-[16px] border border-[#BFBFBF] bg-[#FDFBF7] flex items-center justify-center text-xl font-semibold text-white shrink-0 cursor-pointer" 
          onClick={() => {navigate("/search")}}>
            <div className='flex flex-col'>
              <div className='w-[198px] h-[238px] relative'>

                {/* review */}
              <div className='w-[73px] h-[16px] bg-[#3643FB] rounded-[2px] px-[2px] gap-[2px] absolute mt-28 ml-2 flex justify-center items-center'>
                <div className='font-montextralight text-[8px] text-[#F5F5F5] flex items-center justify-center gap-1'>
                  <img src='/assets/images/material-symbols-light_star.png' className='w-2 h-2'/>
                  <div className='mt-[2px]'>{hotel.review}</div>
                  </div>
              </div>

              <img src={hotel.image} className='rounded-t-[16px] rounded-tr-[16px]'/>

              <div className='flex flex-col items-start text-black text-xs w-full gap-1 mt-2 ml-2'>
                <div className='font-montsemibold text-[#333333] text-sm'>{hotel.name}</div>

                <div className='flex'>
                <div className='font-mont text-[#333333] text-xs font-bold'>Check in: </div>
                <div className='font-montserratlight text-xs font-medium'>&nbsp;&nbsp;{hotel.checkInTime}</div>
                </div>

                <div className='flex'>
                <div className='font-mont text-[#333333] text-xs font-bold'>Check out: </div>
                <div className='font-montserratlight text-xs font-medium'>&nbsp;&nbsp;{hotel.checkoutOutTime}</div>
                </div>

                <div className='flex justify-between w-full mt-2'>
                  <div className='font-montsemibold text-[#333333] text-xs'>{hotel.duration}</div>
                  <div className='flex items-center gap-[3px]'>
                    <div>
                      <img src={hotel.statusLogo} />
                    </div>
                    <div  style={{ 
                      fontFamily: 'Mont Semibold, sans-serif',
                      fontSize: '0.75rem', // 12px (text-xs)
                      marginRight: '1rem', // mr-4
                      color: hotel.status === 'Pending' ? '#FF6525' : '#90EB61',
                      }} >{hotel.status}</div>
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