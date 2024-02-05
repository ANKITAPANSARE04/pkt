import React from "react";
import { useNavigate } from "react-router-dom";
import { Topnav, Footer } from "./Nav-foo";
import EloCreator from "../img/fabric.png";

export default function Fabric() {
  const navigate = useNavigate();
  return (
    <>
      <div className="ventures-bg mob-col-rev px-5">
        <Topnav />
        <div className="py-3 px-5 ">
          <span class="material-symbols-outlined" onClick={() => navigate(-1)}>
            arrow_back_ios
          </span>

          <h1 className="my-3">Fabric Global Trading Platform</h1>

          <div className=" row ">
            <div className="col-lg-8 col-md-6 col-sm-12">
              <p>
                Our platform empowers fabric manufacturers around the world to
                seamlessly connect with buyers and resellers seeking only the
                finest raw materials.
              </p>
              <p>
                We take pleasure in providing a secure and safe environment, for
                all of our users at Fabric Global Trade. Our quality check
                certifications guarantee that only the best goods are made
                available on our platform giving manufacturers and customers
                alike peace of mind. Also, you can effortlessly navigate the
                application, locate what you're looking for, and finish
                transactions fast and effectively thanks to our user-friendly
                layout.
              </p>
              <p>
                But we're more than just a B2B portal - we are also committed to
                building communities of customers and small business owners who
                share a passion for the best in the fabric industry. Whether
                you're a small business owner looking to purchase raw materials
                in bulk, or an individual with a private collection of fabrics
                to sell, Fabric Global Trade is the perfect platform to connect
                you with a world of buyers and sellers.
              </p>

              <h1 className="my-3">Fabric Global Trading Platform</h1>
              <p>
                <b>Subscription Plan -</b> Fabric Global Trade offers a range of
                subscription plans to suit the needs of fabric manufacturers and
                buyers. From basic plans to premium plans, you can choose the
                subscription that best suits your business requirements.
              </p>
              <p>
                <b>Product Upload -</b> Fabric Global Trade allows you to upload
                photos and details of your products, along with certification,
                to showcase your offerings to buyers worldwide. This feature
                makes it easy for buyers to browse and compare products before
                making a purchase.
              </p>
              <p>
                <b>Quality Check -</b> Quality is of utmost importance at Fabric
                Global Trade. Our quality check certification process ensures
                that only the highest quality products are offered on our
                platform.
              </p>
              <p>
                <b>Advertisement on Banners -</b> Fabric Global Trade offers
                advertising opportuni- ties for manufacturers and resellers to
                promote their products on banners, increasing visibility and
                sales.
              </p>
              <p>
                <b>Branding -</b> Manufacturers can use our branding feature to
                create customized storefront that reflects their unique brand
                identity, helping them stand out from the competition.
              </p>
              <p>
                <b>Verification -</b> Fabric Global Trade offers a verification
                process to ensure the authenticity of all users on our platform.
                This ensures a safe and secure environment for all parties
                involved.
              </p>
              <p>
                <b>Banking Support -</b> Our platform offers banking support,
                allowing for secure and efficient transactions between buyers
                and sellers.
              </p>
              <p>
                <b>Payment Gateway -</b> Our secured payment gateway ensures
                that all transact- ions are conducted safely and efficiently.
              </p>
              <p>
                <b>Order and Shipment Tracking -</b> Fabric Global Trade offers
                order and shipment tracking, allowing buyers and sellers to stay
                informed about the status of their transactions.
              </p>
              <p>
                <b>Bank Tie-Ups -</b> We have established partnerships with
                banks to provide additional support for users of our platform
                ensuring the smooth and seamless conduct of business
                transactions.
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
