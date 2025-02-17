import React from 'react'
import Ride from './Ride';

const Rides = () => {
    const rides = [
        {
          title: "Sky Ring",
          location: "Kochi",
          description: "Shoot up a sky-high tower for a birds-eye view of Wonderla Kochi!",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Sky_Ring_480p_1749236cd3.mp4"
        },
        {
          title: "Space Gun",
          location: "Kochi",
          description: "See the world upside-down, dangling from high up above the ground!",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Space_Gun_480p_a91b755b34.mp4"
        },
        {
          title: "Air Race",
          location: "Kochi",
          description: "An exhilarating flight simulation with banks, loops and dives.",
          videoUrl: "https://d22pimhl2qmbj7.cloudfront.net/public/Air_Race_480p_5d9fb9b2f6.mp4"
        }
      ];
    
      return (
        <div className="mx-auto flex max-w-fit gap-5 lg:ml-0">
          {rides.map((ride, index) => (
            <Ride key={index} {...ride} />
          ))}
        </div>
      );
}

export default Rides