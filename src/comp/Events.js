import React from "react";
import { Topnav, Footer } from "./Nav-foo";
import TravelEase from "../img/travel-ease.png";
import Fabric from "../img/fabric.png";
import Meteor from "../img/meteor.png";

export default function Events() {
  return (
    <>
      <div className="ventures-bg px-4">
        <Topnav />
        <div className="Ventures-container pb-5">
          <h1 className="text-center">Events</h1>
          <div
            id="carouselExampleControls"
            class="carousel slide col-lg-7 col-md-10 col-sm-12 "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner text-center">
              <div class="carousel-item active ">
                <div className="event-card">
                  <img src={Meteor} alt="tedx" />
                  <br />
                  <h6>Meteor Pauket Social Technologies Pvt Ltd </h6>
                  <button className="btn-orange">Know More</button>
                </div>
              </div>
              <div class="carousel-item">
                <div className="event-card">
                  <img src={Fabric} alt="tedx" />
                  <br />
                  <h6>Fabric Pauket Social Technologies Pvt Ltd </h6>
                  <button className="btn-orange">Know More</button>
                </div>
              </div>
              <div class="carousel-item ">
                <div className="event-card">
                  <img src={TravelEase} alt="tedx" />
                  <br />
                  <h6>TravelEase Pauket Social Technologies Pvt Ltd </h6>
                  <button className="btn-orange">Know More</button>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
