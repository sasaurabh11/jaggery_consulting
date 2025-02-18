import React, { useContext } from "react";
import Ride from "./RideCard";
import { LandRides, waterRides, kidsRides } from '../content/data';
import { AppContext } from "../context/AppContext";

const Rides = () => {
  const { ride } = useContext(AppContext);

  const getRides = () => {
    if (ride === 'land') {
      return LandRides;
    } else if (ride === 'water') {
      return waterRides;
    } else {
      return kidsRides;
    }
  };

  return (
    <div className="mx-auto flex max-w-fit gap-5 lg:ml-0 rounded-lg">
      {getRides().map((ride, index) => (
        <Ride key={index} {...ride} />
      ))}
    </div>
  );
};

export default Rides;