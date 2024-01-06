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
            Amelie Lens, and many more. Immerse yourself in the music and dance the night away under the starlit sky. As
            the night unfolds, experience the dynamic beats of Dimitri Vegas & Like Mike, the energetic sounds of
            Hardwell, and the eclectic tunes of Salvatore Ganacci. The night will be topped off with the enchanting sets
            of Charlotte de Witte and Afrojack, creating an unforgettable atmosphere. Our program is carefully curated
            to provide a seamless flow of music genres, ensuring a diverse and exciting musical journey. From
            progressive beats to heart-pounding rhythms, our lineup guarantees an unparalleled experience for all music
            enthusiasts. Join us as we celebrate the spirit of music and entertainment. The festivities continue
            throughout the night, with the last notes fading away at 8:00 AM. Get ready for an unforgettable night of
            music, dancing, and unparalleled energy!
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
