// Ventures
import React from "react";
import { NavLink } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/elo-creators.png";
import ImaxApp from "../img/imx-tv-app.png";
import Meteor from "../img/meteor.png";
import Actbold from "../img/act-boldly.png";
import Fabric from "../img/fabric.png";
import TravelEase from "../img/travel-ease.png";
import Piink from "../img/piink.png";
import GoLive from "../img/go-live.png";

export default function Ventures() {
  return (
    <>
      <div className="ventures-bg app-collection px-4">
        <Topnav />
        <h1 className="text-center">Ventures</h1>

        <div className="row py-5 text-center">
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v1/">
              <div className="card-item ">
                <img src={EloCreator} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v2/">
              <div className="card-item">
                <img src={Meteor} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v3/">
              <div className="card-item">
                <img src={Fabric} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v4/">
              <div className="card-item">
                <img src={TravelEase} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v5/">
              <div className="card-item">
                <img src={Piink} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v6/">
              <div className="card-item">
                <img src={GoLive} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v7/">
              <div className="card-item ">
                <img src={ImaxApp} alt="analysis" />
              </div>
            </NavLink>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-6  py-3">
            <NavLink className="nav-link" to="/v8/">
              <div className="card-item ">
                <img src={Actbold} alt="analysis" />
              </div>
            </NavLink>
          </div>
        </div>

        {/* <div className="row Ventures-container py-5">
    
          <div className="col-lg-3 col-md-4 col-sm-12">
            <NavLink className="nav-link" to="/v4/">
              <img className="card-item" src={TravelEase} alt="analysis" />
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <NavLink className="nav-link" to="/v5/">
              <img className="card-item w-100" src={Piink} alt="analysis" />
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <NavLink className="nav-link" to="/v6/">
              <img className="card-item" src={GoLive} alt="analysis" />
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <NavLink className="nav-link" to="/v7/">
              <div className="card-item m-auto ">
                <img className="my-5 pb-4 ms-1" src={ImaxApp} alt="analysis" />
                <br />
              </div>
            </NavLink>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-12">
            <NavLink className="nav-link " to="/v8/">
              <div className="card-item  m-auto">
                <img className="my-5 pb-4 ms-1" src={Actbold} alt="analysis" />
              </div>
            </NavLink>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  );
}
