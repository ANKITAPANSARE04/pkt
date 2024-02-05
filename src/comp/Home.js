// import React from 'react';
import { Topnav, Footer } from "./Nav-foo";
import India from "../img/make-in-India-no-bg.png";

export default function Home() {
  return (
    <>
      <div>
        <div className="home-bg px-4 pb-4">
          <Topnav />
          <div className="Home-pg-desc py-5 ps-4">
            <img src={India} alt=" " />
            <p className="py-3">
              Developing applications and products to give people experiences
              and power to build community, to bring them closer. we are
              imagining a of new social experiences intechnology and internet
              based business module.
            </p>
            <p className="pb-3">
              Our company offers a full range of Modern Technology services.
            </p>
            <button className="btn-orange">Get Started</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
