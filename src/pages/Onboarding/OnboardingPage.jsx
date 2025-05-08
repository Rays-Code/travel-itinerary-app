import React from 'react'
import StatusBar from '../../components/common/StatusBar'
import OnboardingForm from '../../components/Onboarding/OnboardingForm'
import OnboardingFooter from '../../components/Onboarding/OnboardingFooter'

const OnboardingPage = () => {
  return (
    <div className='flex flex-col bg-[#FDFBF7] dark:bg-[#0B0809] h-screen items-center gap-10'>
        <StatusBar />
        <OnboardingForm />
        <OnboardingFooter />
    </div>
  )
}

export default OnboardingPage