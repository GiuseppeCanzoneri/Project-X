import { Image } from "./image";
import React from "react";

export const Gallery = props => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>
            Explore our captivating photo gallery, where each image tells a story of unforgettable moments and vibrant
            experiences. Immerse yourself in the visual symphony of our events, captured to perfection. From the
            energetic beats on the dance floor to the candid smiles that light up the room, our photo gallery is a
            reflection of the unique and magical moments we create. Join us on a visual journey that echoes the rhythm
            of joy, celebration, and the unparalleled beauty of our musical experiences.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                    <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
