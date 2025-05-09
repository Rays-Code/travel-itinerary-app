import { useNavigate } from 'react-router-dom'
import BottomNav from '../common/BottomNav';

const OnboardingFooter = () => {
  const navigate = useNavigate();
  
  return (
    <div className='flex justify-center mt-55 w-full sm:w-[383px] gap-2'>
       
            <button onClick={() => {
              navigate("/dashboard")
            }} className='bg-[#3643FB] text-[#F5F5F5]  text-base font-montserrat font-medium p-3 w-full mx-4 rounded-lg cursor-pointer'>Continue</button>
       
      
    </div>
  )
}

export default OnboardingFooter