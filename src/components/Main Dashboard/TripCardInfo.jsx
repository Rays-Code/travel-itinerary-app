import React from 'react'

const TripCardInfo = () => {

   return (
        <div className="absolute bottom-0 left-0 right-0 p-3 flex items-center justify-between mb-20">
      {/* Duration */}  
      <div className="flex items-center gap-2">
        <div className="w-10 h-5 rounded-full  flex items-center justify-center">
          <img 
            src="/assets/images/clock.png" 
            alt="duration" 
          />
        </div>
        <div className="flex flex-col font-montserrat text-[#F5F5F5]">
          <span className="text-white text-sm font-semibold">8 Days</span>
          <span className="text-white/80 text-[10px] font-normal">Duration</span>
        </div>
      </div>
      
      {/* Group Size */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-5 rounded-full flex items-center justify-center">
          <img 
            src="/assets/images/people.png" 
            alt="group" 

          />
        </div>
        <div className="flex flex-col font-montserrat text-[#F5F5F5]">
          <span className="text-white text-sm font-semibold">4 (2M,2F)</span>
          <span className="text-white/80 text-[10px] font-normal">Group Size</span>
        </div>
      </div>
      
      {/* Activities */}
      <div className="flex items-center gap-2">
        <div className="w-10 h-5 rounded-full flex items-center justify-center">
          <img 
            src="/assets/images/activies.png" 
            alt="activities" 
          />
        </div>
        <div className="flex flex-col font-montserrat text-[#F5F5F5]">
          <span className="text-white text-sm font-semibold">14</span>
          <span className="text-white/80 text-[10px] font-normal">Activities</span>
        </div>
      </div>
    </div>
   )
}

export default TripCardInfo