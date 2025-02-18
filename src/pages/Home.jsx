import React, { useRef, useEffect, useState, useContext } from "react";
import Rides from "./Rides";
import left from "../assets/left.svg";
import right from "../assets/right.svg";
import SideDrawer from "./sideDrawer";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const ridesContainerRef = useRef(null);
  const scrollAmount = 300;
  const scrollInterval = 3000;
  const [isLeftScrolling, setIsLeftScrolling] = useState(false);
  const [isRightScrolling, setIsRightScrolling] = useState(false);
  const {drawer} = useContext(AppContext);

  const scrollLeft = () => {
    if (!ridesContainerRef.current || isLeftScrolling) return;

    setIsLeftScrolling(true);
    ridesContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });

    setTimeout(() => setIsLeftScrolling(false), 500);
  };

  const scrollRight = () => {
    if (!ridesContainerRef.current || isRightScrolling) return;

    setIsRightScrolling(true);
    ridesContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => setIsRightScrolling(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!ridesContainerRef.current || isLeftScrolling || isRightScrolling) return;

      const { scrollLeft, scrollWidth, clientWidth } = ridesContainerRef.current;

      if (scrollLeft + clientWidth >= scrollWidth) {
        ridesContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        ridesContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }, scrollInterval);

    return () => clearInterval(interval);
  }, [isLeftScrolling, isRightScrolling]);

  return (
    <div className="mt-40 flex flex-col gap-8 w-full max-w-[1000px]">
      <div className="flex justify-between items-center w-full px-4">
        <h1 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
          OUR ICONIC RIDES
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={scrollLeft}
            disabled={isLeftScrolling}
            className="flex items-center justify-center size-9 sm:size-10 md:size-11 lg:size-12 rounded-full text-blue bg-[#fad600] cursor-pointer disabled:opacity-50"
          >
            <img src={left} alt="Left" />
          </button>
          <button
            onClick={scrollRight}
            disabled={isRightScrolling}
            className="flex items-center justify-center size-9 sm:size-10 md:size-11 lg:size-12 rounded-full text-blue bg-[#fad600] cursor-pointer disabled:opacity-50"
          >
            <img src={right} alt="Right" />
          </button>
        </div>
      </div>

      <div
        ref={ridesContainerRef}
        className="scroll-container flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-4"
        style={{
          scrollSnapType: "x mandatory",
          whiteSpace: "nowrap",
          pointerEvents: isLeftScrolling || isRightScrolling ? "none" : "auto",
        }}
      >
        <Rides />
      </div>

      <div
        className="capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-blue bg-yellow-500 text-blue-600 mt-14 mb-0.5 cursor-pointer"
        tabIndex={0}
      >
        Explore All Rides!
      </div>

      <div className={`${
        drawer ? "translate-x-0 absolute bg-white shadow-xl transition-transform duration-300 right-0 top-0 h-full w-full sm:w-[480px] scroll-container" : "translate-x-full"
      }`}>
      {
        drawer ? (<SideDrawer />) : ""
      }
      </div>
    </div>
  );
};

export default Home;