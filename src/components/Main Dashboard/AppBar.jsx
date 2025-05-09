import React from 'react'

const AppBar = () => {
  return (
    <div className='w-full sm:w-[353px] flex justify-between'>
        <div className='flex flex-col h-[50px] justify-center pl-[18px]'>
            <h2 className='font-mont font-extrabold text-2xl text-[#333333]'>Hello Chhavi!</h2>
            <p className='text-[#333333] font-montserrat font-medium text-base'>Ready for the trip?</p>
        </div>
        <div className='pr-4 cursor-pointer'>
        <div className='w-[38px] h-[38px] bg-[#FF7339] flex justify-center items-center rounded-[19px] p-2  gap-2'>
            <div className='font-montlight font-semibold text-xl text-[#FFFFFF]'>C</div>
        </div>
        </div>
    </div>
  )
}

export default AppBar