import React, { useState } from "react";
import { Topnav, Footer } from "./Nav-foo";
import logo2 from "../img/about-pg-logo.png";
import logo3 from "../img/KOI-LOGO.png";
import astront from "../img/astronaut.png";

const About = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <div>
        {show ? (
          <div className="about-bg px-4">
            <Topnav />
            <div className="pb-3">
              <h1 className="text-center">About Us</h1>

              <div className=" row mx-3">
                <div className="col-lg-8 col-md-6 col-sm-12 py-5">
                  <p>
                    Modern Technology company with an Internet-Based Business &
                    Entertainment for consumers and entertainers around the
                    world.
                  </p>
                  <p>
                    Originally started as an online digital marketing company,
                    and now has morphed into an media and technology company
                    with an internet-based business enterprise that is largely
                    focused on providing social networking, e-commerce, digital
                    streaming and artificial intelligence (Al) services.
                  </p>
                  <p>
                    Pauket Social is a vast media and technology based
                    enterprise twhich is about to l aunch applications like
                    Social Networking, Ott, User Generated App, Influencer
                    Marketing Apps, ecommerce, business and entertainment
                    applications, directly to millions of people around the
                    world.
                  </p>
                  <p>
                    Media and Technology has become an integral part of the
                    business world. With the emergence of technology, many
                    companies have started to invest in media technology. Koi
                    Limited is a leading player in this field. We are a leading
                    media and technology solutions providing company all over
                    the world doing over several years.
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 text-center">
                  <img className="about-logo my-5" src={logo2} alt="p-logo" />
                  <br />
                  <img className="astronut" src={astront} alt="p-logo" />
                </div>
              </div>

              <div className="text-center">
                <p
                  className="text-white pointer"
                  onClick={() => setShow(!show)}
                >
                  Know More
                  <span class="material-symbols-outlined align-middle">
                    arrow_forward_ios
                  </span>
                </p>
              </div>
            </div>
          </div>
        ) : null}
        {show ? null : (
          <div className="ventures-bg abt2 px-4">
            <Topnav />
            {/* <div className="my-5  ">  */}
            <div className="row mx-4 pb-3">
              <div className="col-lg-8 col-md-8 col-sm-12 py-4 px-3">
                <h3>
                  Koi Worldwide Limited is a Media and Technology Company with
                  an Internet Based Business.
                </h3>

                <p>
                  KOI WORLDWIDE LIMITED Originally started as an online digital
                  marketing company, and now has morphed into an media and
                  technology company with an internet-based business enterprise
                  that is largely focused on providing social networking,
                  e-commerce, digital streaming and artificial intelligence (Al)
                  services.
                </p>
                <p>
                  KOI WORLDWIDE LIMITED is a vast media and technology base
                  enterprise that is about to launch applications like Social
                  Networking, Ott, User Generated App, Influencer Marketing
                  Apps, directly to millions of people around the world.
                </p>
                <p>
                  Koi Limited is focused on developing and creating applications
                  with media and technology to get the world closer than we
                  could ever expect in our life.
                </p>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                <img className="about-logo my-5" src={logo3} alt="p-logo" />
              </div>
            </div>

            <div className="text-center pb-3">
              <p
                className="text-white pointer m-0"
                onClick={() => setShow(!show)}
              >
                <span class="material-symbols-outlined align-middle">
                  arrow_back_ios
                </span>
                Go Back
              </p>
            </div>

            {/* </div> */}
          </div>
        )}

        {/* <button className="btn-orange  " onClick={() => setShow(!show)}>
          Toggle
        </button> */}
      </div>

      <Footer />
    </>
  );
};

export default About;
