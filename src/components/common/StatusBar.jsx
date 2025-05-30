import React from 'react'

const StatusBar = () => {
  return (
    <div className='w-[370px] h-[24px] pl-2 py-2 flex justify-between'>

        {/* icon-left */}
        <div className='w-[35px] h-[22px] top-[1px] left-[8px]'>
        <span className='text-[#0D0D0E] dark:text-[#FFFFFF] text-[17px] font-sf font-semibold pl-1'>9:41</span>
        </div>

        {/* icon-left */}
        <div className='w-[75px] h-[13px] flex justify-between py-1 mr-1'>
        <div>
            <img src='/assets/images/signal.png' className='block dark:hidden'/>
            <img src='/assets/images/signal-dark.png' className='hidden dark:block'/>
        </div>
        <div>
            <img src='/assets/images/wi-fi.png' className='block dark:hidden'/>
            <img src='/assets/images/wi-fi-dark.png' className='hidden dark:block'/>
        </div>
        <div>
            <img src='/assets/images/battery.png' className='block dark:hidden'/>
            <img src='/assets/images/battery-dark.png' className='hidden dark:block'/>

        </div>
        </div>

    </div>
  )
}

export default StatusBar