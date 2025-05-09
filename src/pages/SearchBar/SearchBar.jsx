import React, { useEffect, useRef, useState } from 'react';
import TourCard from '../../components/Main Dashboard/TourCard';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const navigate = useNavigate()

  const inputRef = useRef(null);
  const [placeDetails, setPlaceDetails] = useState(null);

  const [tourCardInfo, setTourCardInfo] = useState([{
      id: 1,
      image: "/assets/images/senso-ji-temple.png",
      title: "Senso-ji Temple & Nakamise Shopping Street Senso-ji",
      time: "8:15 am Morning",
      duration: "3 hours",
      pickup: "From Hotel"
    },
    {
      id: 2,
      image: "/assets/images/tokyo-sky-tree.png",
      title: "Tokyo Sky Tree",
      time: "1:00 pm Afternoon",
      duration: "3 hours",
      pickup: "From Nakamise Street"
    },
    {
      id: 3,
      image: "/assets/images/kimono-wearing.png",
      title: "Kimono Wearing",
      time: "Anytime before 8:00pm",
      duration: "1-2 hours",
      pickup: "From Hotel"
    }
  ])

  useEffect(() => {
    const loadScript = () => {
      if (!window.google) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAPS_API_KEY}&libraries=places`;
        script.async = true;
        script.onload = initAutocomplete;
        document.body.appendChild(script);
      } else {
        initAutocomplete();
      }
    };

    const initAutocomplete = () => {
      if (!inputRef.current || !window.google) return;

      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ['establishment'],
      });

      // Only get needed fields
      autocomplete.setFields(['name', 'formatted_address', 'geometry']);

      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();

        setPlaceDetails({
          name: place.name,
          address: place.formatted_address,
          location: place.geometry?.location?.toJSON(),
        });
      });
    };

    loadScript();
  }, []);

  return (
    <div style={{ maxWidth: 600, margin: '0 auto', padding: '1rem' }} className='bg-[#FDFBF7] sm:w-[373px] sm:h-screen'>
      <input
        type="text"
        ref={inputRef}
        placeholder="Search for a place..."
        style={{
          width: '100%',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
        className='font-montserrat mt-8'
      />

      {placeDetails && (
        <div className='font-montsemibold' style={{ marginTop: '1rem' }}>
          <h3 className='font-bold text-xl dark:text-[#F5F5F5]'>Place Details:</h3>
          <p className='font-montlight'><strong className='font-bold'>Name:</strong> {placeDetails.name}</p>
          <p className='font-montlight'><strong className='font-bold'>Address:</strong> {placeDetails.address}</p>
        </div>
      )}

            {/* Tour-card */}
        <div className='mt-8 mr-2 cursor-pointer' onClick={() => navigate("/dashboard")}>
          {tourCardInfo.map((tour) => {
            return <div key={tour.id}>
              <TourCard 
              image={tour.image}
              title={tour.title}
              time={tour.time}
              duration={tour.duration}
              pickup={tour.pickup}
              />
            </div>
          })}
     </div>
    </div>
  );
};

export default SearchBar;
