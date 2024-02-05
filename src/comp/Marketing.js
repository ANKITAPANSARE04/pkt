import React from "react";
import { Topnav, Footer } from "./Nav-foo";
import webillus from "../img/marketing-illus.jpg";
import { useNavigate } from "react-router-dom";

export default function Marketing() {
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

        <h1 className="text-center">Marketing</h1>

        <div className="row mx-5 pb-5">
          <div className="col-lg-8 col-md-8 col-sm-12 py-4">
            <p>
              we are a team that has The best marketing solutions in townwith a
              smart and professional team to help you market you product and
              service with the help of digital marketing.
            </p>
            <p class="text-decoration-underline">Services We Offer :</p>
            <dl style={{ listStyleType: "circle" }}>
              <dt>Social Media Marketing</dt>
              <dd>
                - With a strong social media strategy and ablity to create
                engaging content, our teamcan engage every type of audiance.
              </dd>
              <dt>Brand Marketing</dt>
              <dd>
                - Our goal is to make you recognizable and establish a good
                reputation. Brand marketing encompasses many different facets,
                from visual branding to tone and voice, and we are going to take
                care of it for you.
              </dd>
              <dt>Email Marketing</dt>
              <dd>
                - We use Email marketing is a strategy where you send potential
                customers marketing messaging through email. It's used in both
                B2B and B2C marketing strategies and is one of the most
                effective ways to ensure you're hitting your target market..
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
