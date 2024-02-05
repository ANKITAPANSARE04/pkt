import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/elo-creators.png";

export default function EloCreators() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-4">
        <Topnav />
        <div className="py-3 px-5">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">ELO Creators</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                This revolutionary subscription-based platform is changing the
                game when it comes to connecting creators with their fans. Elo
                Creators is designed specifically for creators , musicians,
                writers, and other creatives to showcase their talent and grow
                their following.
              </p>
              <p>
                Elo Creators gives you the freedom to create and upload
                pictures, short videos, long videos, and even stream live to
                your fans. And the best part? You can earn money while doing it!
                Elo Creators provides an opportunity for creators to monetize
                their content.
              </p>
              <p>
                It's never been easier to turn your passioninto profit but ELO
                creators have created such a platform where with additional
                features of Premium, gifting, and subscription, creators can
                earn money by marking up their content as premium, allowing fans
                to subscribe to their content and receive gifts during live
                streams.
              </p>
              <p>
                Elo Creators is more than just a platform – it's a community.
                Here, you can connect withn like-minded creators and fans, share
                you r work, and receive valuable feedback. Elo Creators fosters
                an environment that encourages creativity and collaboration.
              </p>
              <h1 className="my-3">Features</h1>
              <p>
                <b>Creator's Frame -</b> We have the "Creators Frame" feature
                This is where you can create and upload pictures to showcase
                your talent and style. Whether you're a photographer, graphic
                designer, or artist, this is the perfect space to share your
                visual creations with the world.
              </p>
              <p>
                <b>Creators Shots -</b> This is where you can create and upload
                short videos that are up to 60 seconds in length. Here, you can
                let your creativity run wild and produce unique, engaging
                content that captures the attention of your fans.
              </p>
              <p>
                <b>Creators TV -</b> This feature allows you to create and
                upload longer videos so that you can showcase your skills and
                creativity. With this feature, you have the opportunity to
                create more in-depth content that can educate, inspire, or
                entertain your viewers.
              </p>
              <p>
                <b>Creators Live -</b> This is where you can connect with your
                fans in real-time by hosting live streaming sessions. Here, you
                can answer questions, share behind-the-scenes glimpses of your
                creative process, or just hang out and chat with your fans.This
                feature allows you to build adeeper connection with your
                audience and really show them who you are as a creator.
              </p>
              <p>
                <b>Creators Store -</b> This feature allows you to sell your
                products & merchandise directly to your fans. This is the
                perfect space to monetize your creations and build your brand.
              </p>
              <p>
                Whether you're a visual artist, musician, writer, or any other
                type of creator, Elo Creators have everything you need to share
                your talent with the world and connect with your fans in a
                meaningful way.
              </p>
              <p>
                So, what are you waiting for? Join ELO creators today and start
                sharing your talent with the world. Let's create some magic!
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
