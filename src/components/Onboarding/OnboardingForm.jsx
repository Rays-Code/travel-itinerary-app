import React from 'react'



const OnboardingForm = () => {
  return (
    <div className='flex flex-col gap-9 top-[53px] left-[20px] text-[#0B0809]'>

        <div className='flex flex-col items-center text-[#0B0809] dark:text-[#F5F5F5]'> {/*Core*/}
        <h2 className='text-2xl font-mont font-extrabold'>Plan Your Journey, Your Way!</h2>
        <p className='font-monserrat font-normal'>Let’s create your personalised travel experience</p>
        </div>

        {/*Questions*/}

        {/*Destination*/}
        <div className='flex flex-col items-start w-[353px] h-[24px] gap-2'>
        <h3 className='font-montsemibold font-bold text-xl dark:text-[#F5F5F5]'>Where would you like to go?</h3>
        <div className='w-full'>
        <img src='assets/akar-icons_location.png' className='absolute p-2 block dark:hidden'/> 
        <img src='/assets/akar-icons_location-dark.png' className='absolute p-2 hidden dark:block'/> 
        <input type="text" placeholder="Enter Destination" className='border border-[#BFBFBF] rounded-lg gap-2 p-2 pl-8 font-montserrat font-medium text-base w-full placeholder-[#0B0809] dark:placeholder-[#F5F5F5] dark:bg-[#333333]'/>
        </div>
        </div>

        {/*Duration*/}
        <div className='flex flex-col items-start w-[353px] h-[24px] gap-2 mt-12'>
        <h3 className='font-montsemibold font-bold text-xl dark:text-[#F5F5F5]'>How long will you stay?</h3>

        <div className="relative w-full">
        {/* Calendar Icon */}
        <img src="/assets/uil_calendar.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 block dark:hidden" />
        <img src="/assets/uil_calendar-dark.png" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 hidden dark:block" />


        {/* Dropdown Arrow Icon */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none block dark:hidden">
        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        </div>

        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none hidden dark:block">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
        </div>



        {/* Select Dropdown */}
        <select className="appearance-none border border-[#BFBFBF] rounded-lg p-3 pl-10 pr-10 font-montserrat font-medium text-base w-full text-[#0B0809] dark:text-[#F5F5F5] dark:bg-[#333333]">
        <option value="" disabled selected hidden>Select Duration</option>
        <option value="1" className='dark:text-[#ffffff]'>1</option>
        <option value="2" className='dark:text-[#ffffff]'>2</option>
        <option value="3" className='dark:text-[#ffffff]'>3</option>
        <option value="4" className='dark:text-[#ffffff]'>4</option>
        <option value="5" className='dark:text-[#ffffff]'>5</option>
        </select>
        </div>


        </div>

        {/*Group*/}
        <div className='flex flex-col items-start w-[353px] h-[24px] gap-2 mt-12'>
        <h3 className='font-montsemibold font-bold text-xl dark:text-[#F5F5F5]'>Who are you traveling with?</h3>
        <div className='flex flex-col gap-2 w-full h-[150px] text-base font-montserrat font-medium'>
            <div className='flex gap-3'>
                <button className='border flex justify-center focus:border-yellow-500 focus:border-2 p-2 gap-2 rounded-lg w-[170px] h-[50px] border-[#BFBFBF] dark:bg-[#333333]'>
                <img src='/assets/solo.png' className='h-6 mt-1 block dark:hidden'/>
                <img src='/assets/solo-dark.png' className='h-6 mt-1 hidden dark:block'/>
                <div className='mt-1 dark:text-[#F5F5F5]'>Solo</div>
                    </button>
                <button className='border flex justify-center focus:border-yellow-500 focus:border-2 p-2 gap-2 rounded-lg w-[170px] h-[50px] border-[#BFBFBF] dark:bg-[#333333]'>
                <img src='/assets/couple.png' className='h-6 mt-1 block dark:hidden'/>
                <img src='/assets/couple-dark.png' className='h-6 mt-1 hidden dark:block'/>
                <div className='mt-1 dark:text-[#F5F5F5]'>Couple</div>
                    </button>
            </div>
            <div className='flex gap-3 mt-2'>
            <button className='border flex justify-center focus:border-yellow-500 focus:border-2 p-2 gap-2 rounded-lg w-[170px] h-[50px] border-[#BFBFBF] dark:bg-[#333333]'>
                <img src='/assets/family.png' className='h-6 mt-1 block dark:hidden'/>
                <img src='/assets/family-dark.png' className='h-6 mt-1 hidden dark:block'/>
                <div className='mt-1 dark:text-[#F5F5F5]'>Family</div>
                    </button>
            <button className='border flex justify-center focus:border-yellow-500 focus:border-2 p-2 gap-2 rounded-lg w-[170px] h-[50px] border-[#BFBFBF] dark:bg-[#333333]'>
                <img src='/assets/friends.png' className='h-6 mt-1 block dark:hidden'/>
                <img src='/assets/friends-dark.png' className='h-6 mt-1 hidden dark:block'/>
                <div className='mt-1 dark:text-[#F5F5F5]'>Friends</div>
                    </button>
            </div>
        </div>
        </div>

    </div>
  )
}

export default OnboardingForm