import React from "react";

export const Team = props => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Sponsor</h2>
          <p>
            "We extend our gratitude to our generous sponsors who make this unique event possible. Their support and
            commitment contribute to creating an extraordinary experience for all participants. We are thankful for
            their trust and collaboration in organizing an event that celebrates music and culture in an unforgettable
            way."
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.img}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src={d.img} alt="..." className="team-img" />
                    <div className="caption"></div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
