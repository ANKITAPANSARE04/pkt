import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/imx-tv-app.png";

export default function Imax() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-5">
        <Topnav />
        <div className="py-3 px-5 ">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">IMAXX TV</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                IMAXX TV is a platform that offers a unique opportunity for
                filmmakers, creators, and artists to showcase their talent and
                connect with a global audience. The platform allows users to
                upload their content, including films, short films, web series
                and shows, and one can earn revenue based on the number of views
                their content receives. This means that the more engaging and
                popular the content, the more revenue the creator can earn!
              </p>
              <p>
                One of the key features of IMAXX TV is its focus on user-
                generated content (UGC). UGC is any form of content, such as
                images, videos, text, and audio, that has been posted by users
                on online platforms such as social media and discussion forums.
                With IMAXX TV, independent filmmakers and creator can now reach
                a wider audience and monetize their content.
              </p>
              <p>
                IMAXX TV also offers advertising video on demand (AVOD)
                services, which means that users can watch content for free but
                must watch ads in order to do so. This is in contrast to
                subscription video on demand (SVOD) services, which require
                users to pay a recurring fee to access the content. With IMAXX
                TV, users can enjoy a wide range of content without having to
                pay a single penny!
              </p>
              <p>
                IMAXX TV is not just another streaming platform; it is a new
                social experience that brings together creativity,
                entertainment, and technology. The platform is designed to
                provide users with a unique and imm ersive experience that is
                unlike anything else out there. With IMAXX TV, you can discover
                new content, connect with like-minded individuals, and be a part
                of a global community that celebrates creativity and diversity.
              </p>
              <p>
                So, if you are looking for a new and exciting wa to discover and
                engage with independent content from around the world, IMAXX TV
                is the perfect platform for you. So why to wait? Sign up today
                and join the revolution of independent film making and
                creativity!
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
