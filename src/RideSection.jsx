import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ridesData } from "../data/ridesData";
import RideCard from "./RideCard";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";

const RidesSection = () => {
  const [category, setCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const filteredRides = category === "All" ? ridesData : ridesData.filter(ride => ride.category === category);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredRides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [filteredRides.length]);

  return (
    <section className="flex flex-col items-center py-10 px-6">
      <h2 className="text-3xl font-bold mb-4">Wonderla Rides</h2>
      <div className="flex w-full max-w-6xl gap-6">
        <CategorySidebar setCategory={setCategory} />
        <div className="relative flex-1 overflow-hidden">
          <motion.div
            className="flex transition-transform duration-500 ease-in-out"
            animate={{ x: `-${currentIndex * 100}%` }}
          >
            {filteredRides.map((ride) => (
              <RideCard key={ride.id} ride={ride} />
            ))}
          </motion.div>
          <CarouselControls
            onPrev={() => setCurrentIndex((prev) => (prev === 0 ? filteredRides.length - 1 : prev - 1))}
            onNext={() => setCurrentIndex((prev) => (prev + 1) % filteredRides.length)}
          />
        </div>
      </div>
      <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Explore All Rides!
      </button>
    </section>
  );
};

export default RidesSection;
