// Career

import { Topnav, Footer } from "./Nav-foo";
import img1 from "../img/career.png";
import { useState } from "react";
import Modal from "react-modal";
import done from "../img/done.png";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "20px",
    textAlign: "center",
    transform: "translate(-50%, -50%)",
    backgroundColor: "white",
    color: "black",
    width: 400,
  },
};

export default function Career() {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div className="ventures-bg carer px-4">
        <Topnav />

        <h1 className="text-center">Career</h1>

        <div className="row mx-5 pb-5">
          <div className="col-lg-8 col-md-8 col-sm-12 py-4">
            <p>
              That’s why it’s important that our workforce reflects the
              diversity of the people we serve. Hiring people with different
              backgrounds and points of view helps us make better decisions,
              build better products and create better experiences for everyone.
              We feel and want our every team member to bring innovation &
              creativity in their work and in the way they operate.
              <br />
              So, come. Let’s Create Great Things Together and Join Us at PAUKET
              SOCIAL.
              <br />
              Please send your Resume (CV) to our Email.
            </p>
            <br />
            <a className="mailid" href="mailto:career@pauketsocial.com">
              career@pauketsocial.com
            </a>
            {/* <p>OR</p>
            <button className='btn-orange mb-5'  onClick={setModalOpen}>Upload File</button> */}
          </div>

          <div className="col-lg-4 col-md-4 col-sm-12 text-center">
            <img className="career-img " src={img1} alt="carrer" />
          </div>
        </div>

        <Modal
          isOpen={modalOpen}
          onRequestClose={() => setModalOpen(false)}
          style={customStyles}
        >
          <img src={done} alt="done" />
          <h4 className="fw-bolder my-3">File uploaded successfully </h4>
        </Modal>
      </div>
      <Footer />
    </>
  );
}
