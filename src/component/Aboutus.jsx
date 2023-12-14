import React from "react";
import "./aboutus.css";
import mapAirplane from "./vedios/Airplane-Icon.mp4";
import { Slide, Zoom } from "react-awesome-reveal";

const Aboutus = () => {
  return (
    <div className="Aboutus__container container text-center">
      <div className="row aboutus__title">
        <h1 className="rafi">KNOW ABOUT US</h1>
        <div className="row aboutus__section">
          <div className="col-12 col-sm-6 col-md-6 col-lg-6 aboutus__left-part">
            <div className="myelementSec">
              <Zoom triggerOnce={true}>
                <video
                  className="semicard31"
                  src={mapAirplane} // Corrected import and usage
                  alt="dff"
                  autoPlay
                  loop
                  muted
                  width="100%"
                  height="100%"
                ></video>
              </Zoom>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-md-6 col-lg-6 aboutus__right-part">
            Currently, we offer group tours spanning Pan India, Europe, and
            South East Asia. Additionally, we specialize in exclusive tours
            tailored for various demographics such as ladies, students, senior
            citizens, and newlyweds seeking exotic destinations. Our commitment
            involves ongoing research for new offerings, unique themes, and
            enhanced travel experiences to ensure top-notch service for our
            customers. Whether it's a corporate excursion, a romantic getaway, a
            pilgrimage, an adventure-filled journey, or a simple day trip, we
            feature an array of appealing tour options suitable for diverse
            preferences, needs, and budgets. Don't miss out—secure your holiday
            with us today!
          </div>
        </div>
      </div>

      <div className="row ourVision__title">
        <h2>OUR VISION</h2>
        <div className="row ourVision__Subtitle">
          <p>“Spreading Smiles and Happiness”</p>
        </div>
      </div>
      <div className="row ourMission__title">
        <h2>OUR MISSION</h2>
        <div className="row ourVision__Subtitle">
          <p>
            “We are totally committed to quality travel experience with our
            value added services. We will always strive to uphold highest
            ethical standards and create new benchmarks in the tours and travel
            industry.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
