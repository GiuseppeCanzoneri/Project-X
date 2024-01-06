import React from "react";

export const Team = props => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Sponsor</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
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
