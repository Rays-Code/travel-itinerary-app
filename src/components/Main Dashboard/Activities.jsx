import React from 'react'
import Acts from './Acts'
import TourCard from './TourCard'

const Activities = () => {
  return (
      <div className='flex flex-col justify-start items-start w-full sm:w-[353px] gap-4'>
      <div className='flex justify-between w-full sm:w-[353px]'>
      <h3 className='w-[177px] h-[24px] text-lg font-montsemibold text-[#333333] font-bold ml-[19px]'>
        Activities
      </h3>
      <div className='underline font-mont font-extrabold text-[10px] text-[#3643FB] mr-[18px] mt-2'>See all</div>
      </div>

      <div className='flex flex-col w-full'>

        {/* top-activities-component */}
        <div className='flex flex-col w-[353px] h-[114px] rounded-[12px] border border-[#A6A6A6] ml-[19px] bg-[#FDFBF7]'>

          <div className='flex gap-2 items-center'>
            <div className='w-[73px] h-[28px] rounded-[8px] gap-[10px] bg-[#313DDF] font-montserrat font-semibold text-xs text-[#FDFBF7] flex justify-center items-center mt-2 ml-2'>
              <div>
              Day Plan
              </div>
            </div>
            <div className='bg-[#FDFBF7] rounded-[8px] p-1 gap-[10px] w-[82px] h-[28px] border-[0.5px] border-[#313DDF] font-montserrat font-semibold text-xs text-[#313DDF] flex justify-center items-center mt-2 ml-2'>
              <div>
              14 Activies
              </div>
            </div>
          </div>

          {/* Horizontal Scroller */}
          <div className="overflow-x-auto flex gap-2 py-4 px-2 scrollbar-hide">
          {/* JAN 27 - Selected */}
          <div className="flex items-center justify-center py-2 pr-2 pl-1 w-[73px] h-[44px] rounded-[8px] border border-[#313DDF] min-w-[60px] text-center overflow-hidden">

          <div className="bg-[#313DDF] text-white text-xs p-2 gap-[10px] w-[24px] h-[44px] flex items-center justify-center mr-1">
            <span className='rotate-[-90deg] font-montserrat font-semibold text-xs'>JAN</span>
          </div>

          <div className='mr-1'>
          <div className="text-[10px] text-gray-800 mt-1 font-montserrat font-medium text-xs text-[#333333]">MON</div>
          <div className="font-bold text-gray-800 text-sm mb-1 mr-1 font-montserrat font-semibold text-[#333333] text-sm">27</div>
          </div>
          </div>

          {/* Other days - Greyed out */}
          {[
          { day: "TUE", date: "28" },
          { day: "WED", date: "29" },
          { day: "THU", date: "30" },
          { day: "FRI", date: "31" },
          { day: "SAT", date: "01" },
          { day: "SUN", date: "02" },
          ].map((d, i) => (
          <div key={i} >
          <div className='flex flex-col items-center justify-center bg-[#E5E5E5] w-[46px] h-[44px] rounded-[8px] text-center py-1 px2 gap-2'>
            <div>
            <div className="text-sm text-[#808080] mt-1 font-montserrat font-medium text-xs">{d.day}</div>
            <div className="text-[#808080] mb-1 font-montserrat font-semibold text-sm">{d.date}</div>
            </div>
          
          </div>

          </div>
         ))}

         {/* FEB 1 - New month dark box */}
         <div className="flex items-center justify-center py-2 pr-2 pl-1 w-[73px] h-[44px] rounded-[8px] min-w-[60px] text-center overflow-hidden bg-[#E5E5E5]'">

         <div className="bg-[#808080] text-white text-xs p-2 gap-[10px] w-[24px] h-[44px] flex items-center justify-center mr-1">
         <span className='rotate-[-90deg] font-montserrat font-semibold text-xs'>FEB</span>
         </div>


         <div className='mr-1'>
         <div className="text-[10px] text-gray-800 mt-1 font-montserrat font-medium text-xs text-[#808080]">MON</div>
         <div className="font-bold text-gray-800 text-sm mb-1 mr-1 font-montserrat font-semibold text-[#808080] text-sm">03</div>
         </div>

         
         </div>
         </div>


        </div>
        </div>

        {/* day & activities */}
        <div className='flex gap-6'>

          <div className='w-[120px] h-[20px] rounded-[8px] p-2 gap-[10px] bg-[#3643FB] flex items-center justify-center ml-[19px]'>
            <div className='text-xs text-[#F5F5F5] font-montserrat'>Day 1</div>
            <div className='text-xs text-[#F5F5F5] font-montserrat'>27.01.2025</div>
          </div>

          <div className='flex gap-2'>
            <div>
              <img src='/assets/hiking.png' className='w-3'/>
            </div>
            <div className='font-montserrat font-semibold text-sm text-[#3643FB]'>3 Activities</div>
          </div>


        </div>

        {/* Tour-card */}
        <div className='mt-3'>
        <TourCard
        image="/assets/senso-ji-temple.png"
        title="Senso-ji Temple & Nakamise Shopping Street Senso-ji"
        time="8:15 am Morning"
        duration="3 hours"
        pickup="From Hotel"
      />
      <TourCard
        image="/assets/tokyo-sky-tree.png"
        title="Tokyo Sky Tree"
        time="1:00 pm Afternoon"
        duration="3 hours"
        pickup="From Nakamise Street"
      />
      <TourCard
        image="/assets/kimono-wearing.png"
        title="Kimono Wearing"
        time="Anytime before 8:00pm"
        duration="1-2 hours"
        pickup="From Hotel"
      />
        </div>
        
        </div>
  )
}

export default Activities