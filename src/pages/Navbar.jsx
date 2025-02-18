import React, { useContext, useState } from "react";
import logo from "../assets/logo.webp";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import KochiImage from "../assets/kochi.webp";
import BengaluruImage from "../assets/Banglore.webp";
import HyderabadImage from "../assets/Hyderabad.webp";
import BhubaneswarImage from "../assets/Bhubaneswar.webp";
import offers from "../assets/discount.webp";
import rides from "../assets/Rides.webp";
import restaurant from "../assets/resturent.webp";
import events from "../assets/events.webp";
import chocalte from "../assets/chocalate.svg"
import menu from "../assets/menu.svg"
import park from '../assets/bangalore-park.webp'
import resort from '../assets/bangalore-resort.webp'
import { AppContext } from "../context/AppContext";

const locations = [
  { name: "KOCHI", image: KochiImage },
  { name: "BENGALURU", image: BengaluruImage, hasSubmenu: true },
  { name: "HYDERABAD", image: HyderabadImage },
  { name: "BHUBANESWAR", image: BhubaneswarImage },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const {setDrawer} = useContext(AppContext)

  return (
    <div className="flex items-center justify-between p-4 bg-white shadow-md w-[90%] h-[4.2rem] rounded-2xl fixed top-9 left-16 z-40">
      <a className="cursor-pointer transition-all duration-300 ease-in-out">
        <img
          src={logo}
          alt=""
          className="h-[55px] w-[136px] transform hover:scale-105 hover:opacity-90"
        />
      </a>

      <div className=" flex">
        <div
          className="relative ml-6"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="flex items-center cursor-pointer space-x-2 p-2 text-[rgb(113,125,146)] text-[0.9rem]">
            <FaMapMarkerAlt />
            <span className="font-bold text-[rgb(113,125,146)]">LOCATIONS</span>
            <IoIosArrowDown
              className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
            />
          </div>

          {/* Dropdown content */}
          {isOpen && (
            <div className="absolute top-full left-0 w-96  bg-white shadow-lg rounded-md font-medium z-30">
              <ul
                className="p-2"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                {locations.map((loc, index) => (
                  <li
                    key={index}
                    className="p-2 hover:bg-gray-200 cursor-pointer h-12 border-b border-gray-300 flex items-center space-x-2 relative"
                    onMouseEnter={() => loc.hasSubmenu && setSubmenuOpen(index)}
                    onMouseLeave={() => loc.hasSubmenu && setSubmenuOpen(null)}
                  >
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="h-10 w-10 rounded-lg"
                    />
                    <span>{loc.name}</span>
                    {loc.hasSubmenu && (
                      <IoIosArrowForward className="ml-auto" />
                    )}

                    {loc.hasSubmenu && submenuOpen === index && (
                      <div className="absolute left-full top-0 w-48 bg-white shadow-lg rounded-md font-medium z-40">
                        <ul className="p-2">
                          <li className="p-2 hover:bg-gray-200 cursor-pointer h-12 border-b border-gray-300 flex items-center space-x-2">
                            <img src={park} alt="" className="h-10 w-10 rounded-lg"/>
                            <span>Park</span>
                          </li>
                          <li className="p-2 hover:bg-gray-200 cursor-pointer h-12 flex items-center space-x-2">
                            <img src={resort} alt="" className="h-10 w-10 rounded-lg"/>
                            <span>Resort</span>
                          </li>
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="flex items-center cursor-pointer space-x-2 p-2 text-[rgb(113,125,146)] text-[0.9rem]">
          <svg height="0" width="0">
            <defs>
              <filter id="tint" colorInterpolationFilters="sRGB">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.44 0 0 0 0 0.49 0 0 0 0 0.57 0 0 0 1 0"
                />
              </filter>
            </defs>
          </svg>

          <img
            src={offers}
            alt=""
            style={{ filter: "url(#tint)" }}
            className="w-6 h-6"
          />

          <span className="font-bold text-[rgb(113,125,146)]">OFFERS</span>
        </div>

        <div className="flex items-center cursor-pointer space-x-2 p-2 text-[rgb(113,125,146)] text-[0.9rem]">
          <svg height="0" width="0">
            <defs>
              <filter id="tint" colorInterpolationFilters="sRGB">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.44 0 0 0 0 0.49 0 0 0 0 0.57 0 0 0 1 0"
                />
              </filter>
            </defs>
          </svg>

          <img
            src={rides}
            alt=""
            style={{ filter: "url(#tint)" }}
            className="w-6 h-6"
          />

          <span className="font-bold text-[rgb(113,125,146)]">RIDES</span>
        </div>

        <div className="flex items-center cursor-pointer space-x-2 p-2 text-[rgb(113,125,146)] text-[0.9rem]">
          <svg height="0" width="0">
            <defs>
              <filter id="tint" colorInterpolationFilters="sRGB">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.44 0 0 0 0 0.49 0 0 0 0 0.57 0 0 0 1 0"
                />
              </filter>
            </defs>
          </svg>

          <img
            src={restaurant}
            alt=""
            style={{ filter: "url(#tint)" }}
            className="w-6 h-6"
          />

          <span className="font-bold text-[rgb(113,125,146)]">RESTAURANTS</span>
        </div>

        <div className="flex items-center cursor-pointer space-x-2 p-2 text-[rgb(113,125,146)] text-[0.9rem]">
          <svg height="0" width="0">
            <defs>
              <filter id="tint" colorInterpolationFilters="sRGB">
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.44 0 0 0 0 0.49 0 0 0 0 0.57 0 0 0 1 0"
                />
              </filter>
            </defs>
          </svg>

          <img
            src={events}
            alt=""
            style={{ filter: "url(#tint)" }}
            className="w-6 h-6"
          />

          <span className="font-bold text-[rgb(113,125,146)]">EVENTS</span>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <a
          className="bg-[#fad600] rounded-lg"
          href="#"
        >
          <div className="text-blue flex h-[34px] items-center rounded-lg px-3.5">
            <h6 className="flex items-center gap-1.5 text-[11px] font-black uppercase  md:text-xs text-[#334dcf]">
              Book tickets{" "}
              <img src={chocalte} alt="" />
            </h6>
          </div>
        </a>

        <button className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full md:mx-2 lg:h-[17px] lg:w-[26px] lg:bg-transparent font-[#334dcf] " 
                onClick={() => setDrawer(true)}
        >
          <img src={menu} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
