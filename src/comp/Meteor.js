import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/meteor.png";

export default function Meteor() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />

        <div className="px-5 py-3">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">METEOR</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                At METEOR, we take a holistic approach to influencer marketing
                by analyzing multitude of data point including demographics,
                recent reach, engagement, and estimated unaided brand recall.
                This allows us to identify the ideal influencer profile for your
                brand, creating relevant partnerships that foster trust and
                drive engagement.
              </p>
              <p>
                Unlike other influencer marketing platforms, METEOR measures all
                objectives, including clicks, installs, registrations, sales,
                and ROAS. Other platforms only concentrate on top-of-the-funnel
                metrics like reach. Making data-driven decisions to improve
                their strategy is made possible by this method, which gives
                brands the ability to fully comprehend the effects of their
                influencer efforts.
              </p>
              <p>
                Our platform not only benefits brands, but also influencers. By
                partnering with relevant brands through METEOR, influencers can
                monetize their content and build trust with their audience. This
                leads to stronger, more impactful partnerships that benefit both
                parties.
              </p>
              <p>
                For brands, partnering with trusted influencers ensures that
                their reach is targeted with the right intent. This results in
                more meaningful engagement with their target audience and
                stronger connection to their brand. At METEOR we believe that
                influencer partnerships should be a win-win for both brands and
                influencers and we strive to create these mutually beneficial
                relationship.
              </p>
              <h1 className="my-3">Why choose METEOR?</h1>
              <p>
                Our innovative approach to influencer marketing reduces risk and
                maximizes results. With our platform, you can partner with the
                right influencers to achieve your brand's goals and drive a
                measurable impact on your bottom line.
              </p>
              <p>
                Don't settle for mediocre results from your influencer
                campaigns. Join the METEOR community and experience the power of
                data-driven influencer marketing.
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
