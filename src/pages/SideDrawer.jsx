import React, { useContext, useState } from "react";
import cross from "../assets/cross.svg";
import Banglore from "../assets/Banglore.webp";
import parks from "../assets/parks.webp";
import dropDown from "../assets/drop.svg";
import kochi from "../assets/Kochi.webp";
import hyderabad from "../assets/Hyderabad.webp";
import bhubaneswar from "../assets/Bhubaneswar.webp";
import resorts from "../assets/resorts.webp";
import offers from "../assets/offers.webp";
import timing from "../assets/timing.webp";
import aboutus from "../assets/about_us.webp";
import quicklins from "../assets/quick_links.webp";
import groupBooking from "../assets/group_booking.webp";
import tour from "../assets/tour.webp";
import contact from "../assets/contact.webp";
import { AppContext } from "../context/AppContext";

const SideDrawer = () => {
  const [isParksOpen, setIsParksOpen] = useState(false);
  const {drawer, setDrawer} = useContext(AppContext);

  const toggleParks = () => {
    setIsParksOpen(!isParksOpen);
  };

  return (
    <div
      className="absolute bg-white shadow-xl transition-transform duration-300 right-0 top-0 h-full w-full sm:w-[480px] scroll-container z-[9999]"
    >
      <div className="relative flex h-full flex-col px-8 pt-9">
        {/* Header */}
        <div className="flex items-center justify-between pb-4">
          <a
            className="inline-block capitalize aspect-[124/48] w-[102px] md:w-[138px]"
            href="#"
          >
            <img
              alt="Image"
              loading="lazy"
              width="132"
              height="52"
              decoding="async"
              className="h-full w-full object-cover"
              srcSet="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75 1x, https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=384&q=75 2x"
              src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=384&q=75"
              style={{ color: "transparent" }}
            />
          </a>
          <button
            className="flex items-center justify-center size-8 rounded-full border-[1.56px] border-[#dedede] cursor-pointer"
            tabIndex="0"
            onClick={() => setDrawer(false)}
          >
            <img src={cross} alt="Close" />
          </button>
        </div>

        {/* Content */}
        <div className="relative z-[1] flex flex-1 flex-col justify-between overflow-y-auto pb-8 pt-2.5 no-scrollbar sm:pb-10 md:pb-12 lg:pb-[52px] lg:pt-4">
          <div className="flex flex-col">
            {/* Parks Section */}
            <div className="border-b border-gray-light">
              <div className="cursor-pointer" onClick={toggleParks}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                    <div className="size-7">
                      <img
                        alt="Parks"
                        loading="lazy"
                        width="24"
                        height="24"
                        decoding="async"
                        className="h-full w-full object-contain"
                        src={parks}
                        style={{ color: "transparent" }}
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                        Parks
                      </h3>
                      <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                        Explore your favourite Wonderla Park
                      </p>
                    </div>
                  </div>
                  <img
                    src={dropDown}
                    alt=""
                    className={`transition-transform duration-300 ${
                      isParksOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                style={{
                  maxHeight: isParksOpen ? "500px" : "0px",
                  overflow: "hidden",
                  transition: "max-height 300ms ease-in-out",
                }}
              >
                <div className="">
                  <div className="grid grid-cols-2 gap-2.5 pb-2.5 pt-1.5 md:p-1 md:pb-3">
                    <a
                      className="capitalize flex flex-col items-center gap-3 rounded-[14px] border border-gray-light bg-white/10 p-2 shadow-[0px_5.19px_6.7px_0px_#0000000F] md:p-2.5"
                      href="/bengaluru"
                    >
                      <div className="size-9 rounded-full">
                        <img
                          alt=""
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          className="h-full w-full object-cover"
                          src={Banglore}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <span className="text-base inline-block font-mulish !leading-[1.255] text-center font-medium">
                        Bengaluru
                      </span>
                    </a>

                    <a
                      className="capitalize flex flex-col items-center gap-3 rounded-[14px] border border-gray-light bg-white/10 p-2 shadow-[0px_5.19px_6.7px_0px_#0000000F] md:p-2.5"
                      href="/bengaluru"
                    >
                      <div className="size-9 rounded-full">
                        <img
                          alt=""
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          className="h-full w-full object-cover"
                          src={kochi}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <span className="text-base inline-block font-mulish !leading-[1.255] text-center font-medium">
                        Kochi
                      </span>
                    </a>

                    <a
                      className="capitalize flex flex-col items-center gap-3 rounded-[14px] border border-gray-light bg-white/10 p-2 shadow-[0px_5.19px_6.7px_0px_#0000000F] md:p-2.5"
                      href="/bengaluru"
                    >
                      <div className="size-9 rounded-full">
                        <img
                          alt=""
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          className="h-full w-full object-cover"
                          src={hyderabad}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <span className="text-base inline-block font-mulish !leading-[1.255] text-center font-medium">
                        Hyderabad
                      </span>
                    </a>

                    <a
                      className="capitalize flex flex-col items-center gap-3 rounded-[14px] border border-gray-light bg-white/10 p-2 shadow-[0px_5.19px_6.7px_0px_#0000000F] md:p-2.5"
                      href="/bengaluru"
                    >
                      <div className="size-9 rounded-full">
                        <img
                          alt=""
                          loading="lazy"
                          width="36"
                          height="36"
                          decoding="async"
                          className="h-full w-full object-cover"
                          src={bhubaneswar}
                          style={{ color: "transparent" }}
                        />
                      </div>
                      <span className="text-base inline-block font-mulish !leading-[1.255] text-center font-medium">
                        Bhubaneswar
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Resorts sections */}
            <div className="cursor-pointer border-b border-gray-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                  <div className="size-7">
                    <img
                      alt="Parks"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={resorts}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                      Resorts
                    </h3>
                    <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                      Get a rejuvenating experience at Wonderla Resort
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cursor-pointer border-b border-gray-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                  <div className="size-7">
                    <img
                      alt="Parks"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={offers}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                      Offers & Combos
                    </h3>
                    <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                      Plan the perfect day with exciting offers
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cursor-pointer border-b border-gray-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                  <div className="size-7">
                    <img
                      alt="Parks"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={timing}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                      Timing And Guidelines
                    </h3>
                    <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                      Know the timings and other guidelines
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* color parts */}
            <div className="flex flex-col gap-2 pb-1 pt-3 md:gap-2.5 md:pt-3.5">
              {/* Group Booking */}
              <a className="capitalize flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 md:gap-3 md:px-4 md:py-3 bg-[#fad600]">
                <div className="size-10">
                  <img
                    alt="Group Booking"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    className="h-full w-full object-contain"
                    src={groupBooking}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255] text-black">
                    Group booking
                  </h3>
                  <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                    Reach out to Wonderla team
                  </p>
                </div>
              </a>

              {/* Tour Operator Portal */}
              <a className="capitalize flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 md:gap-3 md:px-4 md:py-3 bg-[#334dcf]">
                <div className="size-10">
                  <img
                    alt="Tour Operator Portal"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    className="h-full w-full object-contain"
                    src={tour}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255] text-white">
                    Tour Operator Portal
                  </h3>
                  <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-white">
                    Reach out to Wonderla team
                  </p>
                </div>
              </a>

              {/* Partner With Us */}
              <a className="capitalize flex items-center gap-2.5 rounded-[10px] px-3.5 py-2.5 md:gap-3 md:px-4 md:py-3 bg-[#fad600]">
                <div className="size-10">
                  <img
                    alt="Partner With Us"
                    loading="lazy"
                    width="40"
                    height="40"
                    decoding="async"
                    className="h-full w-full object-contain"
                    src={groupBooking}
                    style={{ color: "transparent" }}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255] text-black">
                    Partner With Us
                  </h3>
                  <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                    Reach out to Wonderla team
                  </p>
                </div>
              </a>
            </div>

            <div className="cursor-pointer border-b border-gray-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                  <div className="size-7">
                    <img
                      alt="Parks"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={aboutus}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                      About Us
                    </h3>
                    <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                      Know all about Wonderla
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="cursor-pointer border-b border-gray-light">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 py-2.5 md:gap-3.5 md:py-3">
                  <div className="size-7">
                    <img
                      alt="Parks"
                      loading="lazy"
                      width="24"
                      height="24"
                      decoding="async"
                      className="h-full w-full object-contain"
                      src={quicklins}
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base sm:text-lg lg:text-xl font-mulish font-medium capitalize !leading-[1.255]">
                      Quick Links
                    </h3>
                    <p className="text-xs inline-block font-mulish font-normal !leading-[1.255] text-gray-dark">
                      Explore all other relevant information here
                    </p>
                  </div>
                </div>
                <img
                  src={dropDown}
                  alt=""
                  className={`transition-transform duration-300 ${
                    isParksOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
