import React from "react";

export const Services = props => {
  return (
    <div id="music-schedule" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Music Schedule</h2>
          <p>
            Dive into an electrifying night filled with pulsating beats and incredible performances at our exclusive
            event. The evening kicks off with the mesmerizing tunes of renowned DJs such as Nina Kravitz, Martin Garrix,
            Amelie Lens, and many more.
          </p>
        </div>
        <div className="schedule-timeline">
          {props.data
            ? props.data.map((event, index) => (
                <div key={`event-${index}`} className="event">
                  <div className="event-image">
                    <img src={event.image} alt={`Image for ${event.artist}`} className="artist-image" />
                  </div>
                  <div className="event-details">
                    <h3>{event.artist}</h3>
                    <p>{event.time}</p>
                  </div>
                </div>
              ))
            : "Loading"}
        </div>
      </div>
    </div>
  );
};
