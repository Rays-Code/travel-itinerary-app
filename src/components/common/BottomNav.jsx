// BottomNav.jsx
import React from 'react';

const BottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-[64px] bg-[#FDFBF7] flex justify-around items-center p-[12px] z-50">
      <button className="flex flex-col items-center">
        <div className="p-2 rounded-full">
          <img src="/assets/images/home-button.png" alt="Home" className="w-12 h-12" />
        </div>
      </button>
      <button>
        <img src="/assets/images/search-button.png" alt="Search" className="w-12 h-12" />
      </button>
      <button>
        <img src="/assets/images/plus-button.png" alt="Add" className="w-12 h-12" />
      </button>
      <button>
        <img src="/assets/images/like-button.png" alt="Favorites" className="w-12 h-12" />
      </button>
      <button>
        <img src="/assets/images/profile-button.png" alt="Profile" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default BottomNav;
