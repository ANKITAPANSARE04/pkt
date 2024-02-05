import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/piink.png";

export default function Piink() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />
        <div className="px-5 py-3">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">Piink Fashion</h1>
          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                Are you ready to elevate your fashion game to new heights? So,
                Piink Fashion is here for you. A revolutionary brand that
                seamlessly blends Indian and European fashion sensibilities to
                create unique, inclusive designs that are a cut above the rest,
                Piink Fashion is at the forefront of the fashion industry,
                bringing you the latest trends that cater to all body types and
                skin tones.
              </p>
              <p>
                At Piink Fashion, we believe that fashion should be accessible
                to everyone, regardless of their background or body type. That's
                why we've invested in cutting-edge data science and AI
                technologies to create designs that are as diverse as our
                customers. From edgy street wear to sophisticated evening wear,
                Piink Fashion has something for every occasion.
              </p>
              <p>
                But Piink Fashion isn't just a brand - it's a movement. We're
                committed to empowering individual to embrace their unique
                identities through fashion and creating a community that
                celebrates diversity and inclusivity. We're always on the
                lookout for fresh, innovative voices to join us on this mission.
              </p>
              <p>
                Join the Piink Fashion revolution and discover the power of
                fashion to elevate your confidence and bring out your true self.
                With our unique designs and unwavering commitment to
                inclusivity, Piink Fashion is the ultimate destination for
                fashion-forward individuals who refuse to settle for anything
                less than the best.
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
