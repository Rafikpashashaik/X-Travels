import React, { Component } from "react";
import "./Card.css"; // Correct the import path
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

class LandingPgePart extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid cardSec " id="maincontainer">
          <div id="matter">
            <Slide direction="up" >
              <h1>Your journeys are simply a click away</h1>
            </Slide>
            <Slide direction="up" >
              <p>
                RIDERE turns your travel into an exciting and effortless<br />
                adventure, making your destination even more enjoyable.
              </p>
            </Slide>
          </div>

          <Zoom triggerOnce={true}>
            <div className="row" id="AllBoxes">

              <div className="col-lg-2 col-md-12 col-sm-1 mobiView" id="box-1">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>Great value for money</h5>
                </div>
                <p>
                Origin Tours And Travels promise unmatched value, leveraging strong partnerships to offer unbeatable deals for you to explore more during our tours. </p>              </div>

              <div className="col-lg-2 col-md-12 col-sm-1 mobiView" id="box-2">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>Best Service</h5>
                </div>
                <p>Our travelers' trust is humbling, often stemming from past guest recommendations. Crafting your ideal trip is our specialty, leaving no detail unchecked. With our dedicated team and seasoned global partners, we're thrilled to join you on what promises to be the journey of a lifetime—the Trip of Life.</p>
              </div>


              <div className="col-lg-2 col-md-12 col-sm-1 mobiView" id="box-3">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>A Team of Experts</h5>
                </div>
                <p>At Tour My India, our team knows India inside out. They're not just skilled; they're experts in every part of this incredible country. Their knowledge is like a goldmine for travelers exploring with us.</p>
              </div>

              {/* <div className="col-lg-2 col-md-12 col-sm-1 mobiView" id="box-3">
                <div className="squaredThree">
                  <input type="checkbox" id="myCheckbox" name="check" checked />
                  <label htmlFor="myCheckbox"> </label>
                  <h5>Reliability</h5>
                </div>
                <p>Count on punctual, dependable service</p>
              </div> */}

            </div>
          </Zoom>

        </div>
      </div >
    );
  }
}

export default LandingPgePart;
