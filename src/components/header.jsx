import React from "react";
import video from "../assets/ballo.mp4";

export const Header = props => {
  return (
    <header id="header">
      <div className="intro">
        <video autoPlay muted loop>
          <source src={video} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a href="#features" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
