import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import plogo from "../img/PAUKET-LOGO.svg";
import Fb from "../img/fb.png";
import Insta from "../img/insta.png";
import Lin from "../img/LinkedIn.png";
import Twit from "../img/twit.png";
import glob from "../img/links.png";
import mail from "../img/mail.png";

// export default
function Topnav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg p-3">
        <div className="container-fluid ">
          <img className="p-logo" src={plogo} alt="pauket" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="material-symbols-outlined text-white">list</span>
          </button>
          <div
            className="collapse navbar-collapse top-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/about/">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/service/">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/venture/">
                  Ventures
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/events/">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/blogs/">
                  Blogs
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/career/">
                  Career
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link " to="/contact/">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-lg-5 col-md-8 col-sm-12">
            <h5 className="fw-bold">
              PAUKET <span className="text-orange">SOCIAL</span> TECHNOLOGIES
              PVT LTD
            </h5>
            <hr />
            <p className="w-75">
              We pauket social technologies pvt ltd are developing technology
              and applications, looking at demand of the populations around the
              globe.
            </p>
            <p>
              <img src={Fb} alt="fb" />
              <img src={Insta} alt="fb" />
              <img src={Twit} alt="fb" />
              <img src={Lin} alt="fb" />
            </p>
          </div>

          <div id="footer-menu" className="col-3">
            <h5>Quick Links</h5>
            <hr />
            <table className="w-100 h-50">
              <tr>
                <td>
                  <NavLink className="nav-link " aria-current="page" to="/">
                    Home
                  </NavLink>
                </td>
                <td>
                  <NavLink className="nav-link " to="/events/">
                    Events
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink className="nav-link " to="/about/">
                    About Us
                  </NavLink>
                </td>
                <td>
                  <NavLink className="nav-link " to="/blogs/">
                    Blogs
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink className="nav-link " to="/service/">
                    Service
                  </NavLink>
                </td>
                <td>
                  <NavLink className="nav-link " to="/career/">
                    Career
                  </NavLink>
                </td>
              </tr>
              <tr>
                <td>
                  <NavLink className="nav-link " to="/venture/">
                    Ventures
                  </NavLink>
                </td>
                <td>
                  <NavLink className="nav-link " to="/contact/">
                    Contact Us
                  </NavLink>
                </td>
              </tr>
            </table>
          </div>

          <div id="footer-contact" className="col-3">
            <h5>Contact Us</h5>
            <hr />
            <table className="w-100 h-50">
              <tr>
                <td>
                  {" "}
                  <img src={glob} alt="fb" />
                </td>
                <td>
                  <a href="www.pauketsocial.com">www.pauketsocial.com</a>
                  <br />
                  <a href="www.koilimited.com">www.koilimited.com</a>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <img src={mail} alt="fb" />
                </td>
                <td> hello@pauketsocial.com </td>
              </tr>
            </table>
          </div>
        </div>

        <hr className="w-100" />

        <p className="text-center">
          © 2022 Pauket Social. All Rights Reserved | Design By Pauket Social
        </p>
      </div>
    </>
  );
}

export { Topnav, Footer };
