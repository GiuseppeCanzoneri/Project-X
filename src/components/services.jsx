import React from "react";

export const Services = props => {
  return (
    <div id="music-schedule" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Music Schedule</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
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
