import React, { useContext } from 'react';
import { useState } from 'react';
import Land from '../assets/Land.svg'
import water from '../assets/water.svg'
import kids from '../assets/kids.svg'
import { AppContext } from '../context/AppContext';

const ParkCategories = () => {
    const [selectedCategory, setSelectedCategory] = useState('land');
    const {ride, setRide} = useContext(AppContext);
    
    const categories = {
      land: {
        position: { left: '51px', top: '17px' },
        name: 'Land',
        rides: 24
      },
      water: {
        position: { left: '130px', top: '220px' },
        name: 'Water',
        rides: 13
      },
      kids: {
        position: { left: '51px', top: '405px' },
        name: 'Kids',
        rides: 9
      }
    };
    
    const handleKeyDown = (e, category) => {
      if (e.key === 'Enter') {
        setSelectedCategory(category);
      }
    };
  
    const getGradientStyle = () => {
      if (selectedCategory === 'land') {
        return {
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) -55deg, rgb(250, 213, 0) 15deg, rgb(250, 213, 0) 65deg, rgb(232, 233, 241) 135deg, rgb(232, 233, 241))"
        };
      } else if (selectedCategory === 'water') {
        return {
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) -5deg, rgb(250, 213, 0) 65deg, rgb(250, 213, 0) 115deg, rgb(232, 233, 241) 185deg, rgb(232, 233, 241))"
        };
      } else { 
        return {
          background: "conic-gradient(from 0deg, rgb(232, 233, 241) 45deg, rgb(250, 213, 0) 115deg, rgb(250, 213, 0) 165deg, rgb(232, 233, 241) 235deg, rgb(232, 233, 241))"
        };
      }
    };
  
    return (
      <div className="relative h-[600px] w-[360px] overflow-visible rounded-lg top-32">
        {/* Background gradient circle */}
        <div 
          className="absolute right-[92px] top-0 size-[600px] rounded-full transition-all duration-500 ease-in-out"
          style={getGradientStyle()}
        >
          <div className="absolute left-[90px] top-[90px] size-[420px] rounded-full bg-[#22304A]" />
        </div>
  
        {/* White circle overlay */}
        <div 
          className="absolute size-[160px] translate-y-1 rounded-full border-[10px] border-amber-300 bg-white transition-all duration-500 ease-in-out"
          style={categories[selectedCategory].position}
        />
  
        {/* Land Section */}
        <div 
          className="absolute cursor-pointer transition-all duration-500 right-[198px] top-[66px]"
          onClick={() => { setSelectedCategory('land'); setRide('land'); }}
          onKeyDown={(e) => handleKeyDown(e, 'land')}
          tabIndex={0}
          role="button"
          aria-label="Select Land category"
        >
          <img 
            src={Land} 
            alt="" 
            className={`transition-all duration-500 ${selectedCategory === 'land' ? 'scale-125' : 'scale-100'}`}
          />
          <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">Land</span>
            <span className="text-sm font-mulish !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3 bg-[#788beb] font-medium">24 Rides</span>
          </div>
        </div>
  
        {/* Water Section */}
        <div 
          className="absolute cursor-pointer transition-all duration-500 right-[110px] top-1/2 -translate-y-1/2"
          onClick={() => { setSelectedCategory('water'); setRide('water'); }}
          onKeyDown={(e) => handleKeyDown(e, 'water')}
          tabIndex={0}
          role="button"
          aria-label="Select Water category"
        >
          <img 
            src={water} 
            alt="" 
            className={`transition-all duration-500 ${selectedCategory === 'water' ? 'scale-125' : 'scale-100'}`}
          />
          <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">Water</span>
            <span className="text-sm font-mulish !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3 bg-[#788beb] font-medium">13 Rides</span>
          </div>
        </div>
  
        {/* Kids Section */}
        <div 
          className="absolute cursor-pointer transition-all duration-500 bottom-[80px] right-[198px]"
          onClick={() => { setSelectedCategory('kids'); setRide('kids'); }}
          onKeyDown={(e) => handleKeyDown(e, 'kids')}
          tabIndex={0}
          role="button"
          aria-label="Select Kids category"
        >
          <img 
            src={kids} 
            alt="" 
            className={`transition-all duration-500 ${selectedCategory === 'kids' ? 'scale-125' : 'scale-100'}`}
          />
          <div className="absolute left-[calc(100%+70px)] top-1/2 flex -translate-y-1/2 flex-col gap-0.5 text-white">
            <span className="text-xl inline-block font-mulish font-normal !leading-[1.255]">Kids</span>
            <span className="text-sm font-mulish !leading-[1.255] flex h-6 w-max items-center justify-center rounded-full bg-blue-light px-3 bg-[#788beb] font-medium">9 Rides</span>
          </div>
        </div>
      </div>
    );
};

export default ParkCategories;