import React from "react";
import { Topnav, Footer } from "./Nav-foo";
import img1 from "../img/blog-img1.png";
import img2 from "../img/blog-img2.png";
import img3 from "../img/blog-img3.png";

export default function Blogs() {
  return (
    <>
      <div className="ventures-bg px-4">
        <Topnav />

        <h1 className="text-center">Blogs</h1>
        <div className="pb-5">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade col-8 blog-img "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src={img1} class="d-block w-100" alt="i1" />
              </div>
              <div class="carousel-item">
                <img src={img2} class="d-block w-100" alt="i2" />
              </div>
              <div class="carousel-item">
                <img src={img3} class="d-block w-100" alt="i3" />
              </div>
            </div>

            <div className="blog-desc">
              <h4>
                You must try to use virtual
                <br /> reality features.
              </h4>
              <button className="btn-orange float-end  ">Read More</button>
              <div className="d-flex">
                <img
                  className="blog-avatar"
                  src="https://media.istockphoto.com/id/509286952/photo/keep-smiling.jpg?b=1&s=170667a&w=0&k=20&c=UymhJdLNuAhjxn9rV88ynBUO_AeBG1iGj0dw7dHOZbQ="
                  alt="avatar"
                />
                <p className="my-auto">
                  By Manish Yadav <br /> September 15, 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
