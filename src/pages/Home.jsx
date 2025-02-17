import React from "react";
import Rides from "./Rides";

const Home = () => {
  return (
    <div className="mt-40 flex flex-col gap-8">
      <h1 className="font-mulish text-[40px] font-black uppercase !leading-[1] tracking-[-0.04em] sm:text-[44px] md:text-[50px] lg:text-[56px] xl:text-6xl text-white text-left">
        OUR ICONIC RIDES
      </h1>
      <Rides />

      <div
        className="capitalize h-14 w-full max-w-[328px] rounded-full text-base font-extrabold leading-tight flex items-center justify-center text-blue bg-yellow mt-14 mb-0.5 cursor-pointer bg-yellow-500 text-blue-600"
        tabIndex={0}
        style={{ willChange: "auto", transform: "none" }}
      >
        Explore All Rides!
      </div>
    </div>
  );
};

export default Home;
