import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/travel-ease.png";

export default function TravelEase() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />
        <div className="px-5 py-3">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">Travel Ease</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                Are you ready to embark on your next adventure? Look no further
                than Travel Ease, the premier travel partner for savvy
                globetrotters! As an Indian-based online travel company, Travel
                Ease offers a vast array of services, from booking flights and
                reserving hotels to purchasing rail and bus tickets.
              </p>
              <p>
                What distinguishes Travel Ease from other travel agencies is its
                dedication to offering topnotch client service. You can easily
                compare and book hotels and flights using its user-friendly
                interface and since it has a reputation for providing some of
                the lowest prices available, you can be sure that you're
                receiving the best deal possible.
              </p>
              <p>
                Beyond its affordable prices Travel Ease takes pride in
                providing a safe platform and dependable 24-hour customer
                service. Travel Ease is committed to making your trip as
                seamless & hassle-free as possible.
              </p>
              <p>
                Don't let the problems of booking travel dampen your wanderlust.
                With Travel Ease, you can experience the world's most exotic and
                awe- inspiring destinations with no headache. So, what are you
                waiting for? Start your journey with Travel Ease today and
                unlock a world of possibilities!
              </p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 text-center">
              <img src={EloCreator} alt=" " />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
