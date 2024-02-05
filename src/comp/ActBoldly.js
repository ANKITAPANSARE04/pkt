import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/act-boldly.png";

export default function Actbodly() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />
        <div className="px-5 py-3 ">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">Act Boldly</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                Presenting Act Boldly, the ground-breaking app that is
                transforming the talent management industry. The traditional
                model has neglected to include many highly skilled individuals
                for far too long by concentrating only on finding and developing
                the finest candidates for an organization's requirements. By
                giving models and performers a platform to communicate with the
                world while keeping them safe from con artists and bogus
                agencies, Act Boldly is radically changing the game.
              </p>
              <p>
                At Act Boldly, we understand the importance of safeguarding
                personal infor-mation, which is why we have implemented rigorous
                security measures to ensure that your data is always verified
                and protected. We believe that all models and talents should
                have access to reliable and secure opportunities that enable
                them to take their careers to the next level.
              </p>
              <p>
                With our cutting-edge app you can showcase your talent with ease
                create an impressive profile, and connect with other talented
                individuals in the industry. Whether you are a model, actor, or
                musician, Act Boldly has everything you need to take your career
                to the next level.
              </p>
              <p>
                Our app is designed to provide you with a safe and reliable
                journey as you navigate your career path. We meticulously verify
                data for models, talents, and hiring agencies, producers, and
                directors to ensure that you have a secure and trustworthy
                experience.
              </p>
              <h1 className="my-3">Features</h1>
              <p>
                Payment Gateway -One of the most exciting features is the
                Payment Gateway which allows users to book models and talents
                directly through the app. This streamlined process eliminates
                the need for third-party agencies and ensures that all
                transactions are secure and reliable.
              </p>
              <p>
                Verified Badge - In addition to the Payment Gateway, Act Boldly
                also offers a Verified Badge feature which provides an extra
                layer of security and credibility for models and talents. Users
                who have completed our rigorous verification process will
                receive a verified badge on their profile , making it easy for
                potential clients to identify them as legitimate industry
                professionals.
              </p>
              <p>
                Schedule Function - Act Boldly also offers the schedule
                function, which allows models and talents to manage their
                bookings and appointments with ease. This feature enables users
                to view their upcoming bookings, manage their availability, and
                communicate with clients all in one place.
              </p>
              <p>
                At Act Boldly, we are committed to providing the best possible
                experience for our users. Whethe r you are a model, actor,
                musician, or other type of talent, our app has everything you
                need to take your career to the next level. Download Act Boldly
                today and discover the exciting features that are transforming
                the talent management industry!
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
