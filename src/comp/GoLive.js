import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/go-live.png";

export default function GoLive() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />
        <div className="px-5 py-3 ">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">GO LIVE</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                Virtual reality has come a long way from being just a sci-fi
                dream to a tangible reality that is changing the way we live,
                work and play. With Go Live the virtual live streaming app you
                can experience a world beyond your imagination. Th is innovative
                application uses pose tracking and 3D near-eye displays to
                create an immersive experience that makes you feel like you are
                in a different world altogether.
              </p>
              <p>
                Go Live is not just about the VR experience but also offers the
                unique feature of modifying faces and environments on the
                screen. You can customize your avatar to look exactly like you.
                With this feature, you can create your own virtual world and
                personalize it to your liking. Whether you want to be on a
                beach, in a forest or even in space, Go Live has got you
                covered.
              </p>
              <p>
                One of the most popular AR apps today is Pokemon Go, where users
                hunt Pokemon in the real world using their smartphones. However
                Go Live takes it a step further by allowing you to experience a
                virtual world in real-time. You can interact with people from
                all over the world, attend concerts, play games, and do much
                more, all from the comfort of your homes.
              </p>
              <p>
                Go Live also has great potential in the field of mental health
                therapy and meditation. With its immersive nature, the
                application provides the flexibility to create various types of
                environments or experiences that can be tailored to suit the
                needs of individuals. This makes it possible toexperience
                situations that are hard to come by in real life or that may be
                too dangerous to go through in real life.
              </p>
              <p>
                In the future, VR technology is expected to revolutionize the
                way we train, learn and conduct meetings. With Go Live you can
                connect with people from all over the world, attend virtual
                conferences, and even conduct business meetings in a virtual
                environment. This not only saves time and resources but also
                provides a more engaging and interactive experience.
              </p>
              <p>
                Whether you want to customize your avatar, attend a concert, or
                experience a different environment altogether.With the potential
                to revolutionize the way we live, work and play. VR is the
                future, and Go Live is leading the way.
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
