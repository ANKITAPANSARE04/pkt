import { Topnav, Footer } from "./Nav-foo";

export default function Contact() {
  return (
    <>
      <div className="ventures-bg px-4 pb-5">
        <Topnav />
        <div className=" text-center ">
          <h1>Contact Us</h1>

          <div className="row mx-5 pb-5">
            {/* website and mail id section */}
            <div className="col-12 my-2">
              <div className="card-item d-flex justify-content-around flex-wrap">
                <div className="my-2">
                  <h4>Email Us</h4>
                  <a href="mailto:hello@pauketsocial.com" className="mailid">
                    hello@pauketsocial.com
                  </a>
                </div>
                <div className="my-2">
                  <h4>Website</h4>
                  <a href="www.pauketsocial.com" className="mailid">
                    www.pauketsocial.com
                  </a>
                </div>
              </div>
            </div>

            {/* mumbai location section */}
            <div className="col-lg-6 col-md-12 col-sm-12 my-2">
              <div className="card-item h-100">
                <iframe
                  title="map-india"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.930377560063!2d72.88227762218965!3d19.154524645599402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7ed56926ea9%3A0x894617bbdec0097e!2sMaster%20Mind%2C%20Royal%20Palms%20Estate%2C%20Aarey%20Colony%2C%20Goregaon%2C%20Mumbai%2C%20Maharashtra%20400065!5e0!3m2!1sen!2sin!4v1681293099217!5m2!1sen!2sin"
                  className="contact-iframe"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="row text-start align-top">
                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Location:
                  </div>
                  <div className="col-lg-4 col-md-10 col-sm-6 col-xs-6 p-2">
                    &nbsp; Mumbai
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Contact:
                  </div>
                  <div className="col-lg-4 col-md-10 col-sm-6 col-xs-6 p-2">
                    +91 89283 44177
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Address:
                  </div>
                  <div
                    colSpan={3}
                    className="col-lg-10 col-md-10 col-sm-6 col-xs-6 p-2"
                  >
                    816 - MASTER MIND -V, ROYAL PALMS ESTATE, AAREY MILK
                    COLONY., Mumbai, 400065, India
                  </div>
                </div>
              </div>
            </div>

            {/* london location setion */}
            <div className="col-lg-6 col-md-12 col-sm-12 my-2">
              <div className="card-item h-100">
                <iframe
                  title="london-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.908007861393!2d-0.1257728842297435!3d51.5149036796363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1681292828937!5m2!1sen!2sin"
                  className="contact-iframe"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="row text-start align-top">
                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Location:
                  </div>
                  <div className="col-lg-4 col-md-10 col-sm-6 col-xs-6 p-2">
                    &nbsp; London
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Contact:
                  </div>
                  <div className="col-lg-4 col-md-10 col-sm-6 col-xs-6 p-2">
                    +44 7441442566
                  </div>

                  <div className="col-lg-2 col-md-2 col-sm-6 col-xs-6 p-2">
                    Address:
                  </div>
                  <div
                    colSpan={3}
                    className="col-lg-10 col-md-10 col-sm-6 col-xs-6 p-2"
                  >
                    Shop 71, ALG ID Cards, The Lanyard, 75, Shelton St, London
                    WC2H 9JQ, United Kingdom
                  </div>
                </div>
              </div>
            </div>

            {/* london location setion */}
            {/* <div className="col-lg-6 col-md-12 col-sm-12 my-2">
              <div className="card-item h-100">
                <iframe
                  title="london-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.908007861393!2d-0.1257728842297435!3d51.5149036796363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccab37652b%3A0x22220c3f07824033!2sShop%2071%2C%20ALG%20ID%20Cards%20t%2Fa%20The%20Lanyard%2C%2075%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e0!3m2!1sen!2sin!4v1681292828937!5m2!1sen!2sin"
                  className="contact-iframe"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <table className="text-start align-top">
                  <tr>
                    <td className="p-2">Location: </td>
                    <td className="p-2">London</td>

                    <td className="p-2">Contact: </td>
                    <td className="p-2"> +44 7441442566</td>
                  </tr>
                  <tr>
                    <td className="p-2">Address:</td>
                    <td colSpan={3} className="p-2">
                      Shop 71, ALG ID Cards, The Lanyard, 75, Shelton St, London
                      WC2H 9JQ, United Kingdom
                    </td>
                  </tr>
                </table>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
