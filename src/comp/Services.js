import React from "react";
import { Topnav, Footer } from "./Nav-foo";
import { NavLink } from "react-router-dom";

export default function Services() {
  return (
    <>
      <div className="service-bg px-4">
        <Topnav />

        <div className="service-desc pb-5">
          <h1 className="text-center">Service</h1>
          <p className="w-75 mx-auto text-center">
            Every business category has its own tailored solution that yields
            positive ROI. The key to success is data! Using digital technology
            services with tools and automation, we capture data within your web
            ecosystem and drive smart, effective decisions. As a result, we
            embrace your expertise along with our marketing knowledgeto produce
            a long term digital strategy that optimizes costs and boosts
            results. We're experts in technology...
          </p>

          <div className="container">
            <Scards />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

function Scards() {
  return (
    <>
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvlKu5qkbcOjUNALKtpT5a4ndShGm4mTRjCscdYf8IOfWgskAFdtsAdzJvft7TpMaYbAqUpcrouWs&usqp=CAU&ec=48665701"
              alt="analysis"
            />
            <p className="fw-bold my-2 fs-4">Website Development</p>
            <p>
              Let's start right now and be the best in your business.. We craft
              applications in accordance with the existing letest trends. Our
              companymakes your business known at global scale..
              <NavLink
                to="/webdev/"
                className="float-end pb-2 text-white  text-decoration-none"
              >
                Learn more &#x2192;{" "}
              </NavLink>
            </p>
            <p></p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UYRVR2ATIeKMQOSz791UxV0D6zELguX11YqWHAFz3UYXPRxWxj5QRlDnIi4Yy5tTXrLSA01sJK4&usqp=CAU&ec=48665701"
              alt="analysis"
            />
            <p className="fw-bold my-2 fs-4">App Development</p>
            <p>
              Here we provide the best tools and techniques to make your app
              user friendly and loveable. Also have development, promotions, and
              marketing for your better flow..
              <NavLink
                to="/appdev/"
                className="float-end pb-2 text-white  text-decoration-none"
              >
                Learn more &#x2192;{" "}
              </NavLink>
            </p>
            <p></p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="card-item">
            <img
              src="https://vietads.net.vn/image/news/9-9-2021/tai-lieu-marketing-80.png"
              alt="analysis"
            />
            <p className="fw-bold  my-2 fs-4">Marketing</p>
            <p>
              Best marketing solution with professional team to help your
              product and service using digital marketing. It include Analysis,
              creative and innovative ideas with effectiev user experiance...
              <NavLink
                to="/marketing/"
                className="float-end pb-2 text-white text-decoration-none"
              >
                Learn more &#x2192;{" "}
              </NavLink>
            </p>
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
