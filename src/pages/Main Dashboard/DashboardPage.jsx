import React from 'react'
import StatusBar from '../../components/common/StatusBar'
import AppBar from '../../components/Main Dashboard/AppBar'
import FlightDetails from '../../components/Main Dashboard/FlightDetails'
import Accomodation from '../../components/Main Dashboard/Accomodation'
import Activities from '../../components/Main Dashboard/Activities'
import Trip from '../../components/Main Dashboard/Trip'

const DashboardPage = () => {
  return (
    <div className='flex flex-col bg-[#FFFFFF] dark:bg-[] h-screen items-center gap-7'>
        <StatusBar />
        <AppBar />
        <Trip />
        <FlightDetails />
        <Accomodation />
        <Activities />
    </div>
  )
}

export default DashboardPage