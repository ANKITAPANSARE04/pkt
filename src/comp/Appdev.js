import React from "react";
import { Topnav, Footer } from "./Nav-foo";
import webillus from "../img/app-illus.jpg";
import { useNavigate } from "react-router-dom";

export default function Appdev() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg carer px-4">
        <Topnav />
        <span
          class="material-symbols-outlined mx-5"
          onClick={() => navigate(-1)}
        >
          arrow_back_ios
        </span>

        <h1 className="text-center">Apps Development</h1>

        <div className="row mx-5 pb-5">
          <div className="col-lg-8 col-md-8 col-sm-12 py-4">
            <p>
              Whatever you are a small company, big company or just a freelance
              blogger, Our company makes your business known at global scale
              with our website. Our team offers you best support.
            </p>
            <b>Let's start right now and be the best in your business..</b>
            <p>
              Welcome to our web design company. We craft website in accordance
              with the latest trends. Amon them, there is material design amking
              screen image more realistic and responsive design providing
              website usability on any portable device, so with that more and
              more people joining social networks today.
            </p>
            <p class="text-decoration-underline">Services We Offer :</p>

            <dl style={{ listStyleType: "circle" }}>
              <dt>Promotion</dt>
              <dd>
                - Responsive design providing website usability on any portable
                device.
              </dd>
              <dt>Marketing</dt>
              <dd>
                - Our company makes your business known at global scale with our
                website latest trends.
              </dd>
              <dt>Development</dt>
              <dd>
                - We craft website in accordance with latest trends. Among them,
                there is material design.
              </dd>
            </dl>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <img className="rounded w-100 my-5" src={webillus} alt="carrer" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
