const TourCard = ({ image, title, time, duration, pickup }) => (
    
    <div className="flex border overflow-hidden shadow-sm mb-4 bg-white w-[349px] h-[145px] rounded-[8px] gap-[10px] border border-[#BFBFBF] cursor-pointer">
      <img src={image} alt={title} className="w-32 h-auto object-cover" />

      <div className="p-2 flex flex-col justify-between py-2">

        <div>
        <h3 className="font-montsemibold font-bold text-sm text-[#333333]">{title}</h3>
        </div>

        <div>
        <p >
          <span className="font-montsemibold font-bold text-xs text-[#333333]">Timing:</span> 
          <span className="font-montserrat font-normal text-xs text-[#333333]">&nbsp;{time}</span>
        </p>
        <p >
          <span className="font-montsemibold font-bold text-xs text-[#333333]">Duration:</span>
          <span className="font-montserrat font-normal text-xs text-[#333333]">&nbsp;{duration}</span> 
        </p>
        <p >
          <span className="font-montsemibold font-bold text-xs text-[#333333]">Pick up:</span>
          <span className="font-montserrat font-normal text-xs text-[#333333]">&nbsp;{pickup}</span>
        </p>

        </div>
        
      </div>
    </div>
  );

  export default TourCard
  