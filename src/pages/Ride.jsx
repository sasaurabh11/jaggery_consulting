import React, { useEffect, useRef } from 'react';

const Ride = ({ title, location, description, videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); 
    }
  }, [videoUrl]);

  return (
    <div className="relative h-[394px] w-[229px] rounded-t-[26px] lg:h-[346px] lg:min-w-[246px] lg:rounded-t-[22px]">

      <div className="aspect-[229/394] w-[229px] lg:aspect-[246/346] lg:w-[246px]">
        <video
          ref={videoRef} 
          autoPlay
          loop
          playsInline
          preload="metadata"
          className="aspect-[229/394] w-full object-cover lg:aspect-[246/346]"
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600 lg:to-gray-800" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-blue-600 lg:to-gray-800" />
      <div className="absolute inset-0 hidden lg:block lg:bg-gradient-to-b from-transparent to-gray-100/5" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col px-3 pb-2.5 text-white lg:pb-1">
        <h3 className="text-lg font-bold capitalize leading-tight">{title}</h3>
        <p className="mt-px text-xs font-normal leading-tight opacity-80">{location}</p>
        <div className="mt-1.5 line-clamp-4 text-xs leading-tight">{description}</div>
        <button
          className="mt-2 h-10 w-full max-w-[150px] rounded-lg bg-yellow-400 text-xs font-black uppercase leading-tight text-blue-600"
        >
          Ride Details
        </button>
      </div>
    </div>
  );
};

export default Ride;