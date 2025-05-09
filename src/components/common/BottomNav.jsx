// BottomNav.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


const BottomNav = () => {
    const navigate = useNavigate()

  return (
    <div className="fixed bottom-0 left-0 w-full h-[64px] bg-[#FDFBF7] sm:w-[351px] flex justify-around items-center p-[12px] z-50 sm:ml-146">
      <button className="flex flex-col items-center cursor-pointer" onClick={() => {navigate("/")}}>
        <div className="p-2 rounded-full">
          <img src="/assets/images/home-button.png" alt="Home" className="w-12 h-12" />
        </div>
      </button>
      <button onClick={() => {navigate("/search")}} className='cursor-pointer'>
        <img src="/assets/images/search-button.png" alt="Search" className="w-12 h-12" />
      </button>
      <button onClick={() => {navigate("/search")}} className='cursor-pointer'>
        <img src="/assets/images/plus-button.png" alt="Add" className="w-12 h-12" />
      </button>
      <button onClick={() => {navigate("/search")}} className='cursor-pointer'>
        <img src="/assets/images/like-button.png" alt="Favorites" className="w-12 h-12" />
      </button>
      <button onClick={() => {navigate("/")}} className='cursor-pointer'>
        <img src="/assets/images/profile-button.png" alt="Profile" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default BottomNav;
