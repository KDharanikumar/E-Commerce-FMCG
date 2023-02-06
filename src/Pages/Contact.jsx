import Banner from "../Components/Banner";
import { FaPhoneVolume } from "react-icons/fa";
import { HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import ContactImg from "../Images/ContactImg.png";

const Contact = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Banner />
        </div>
      </div>
      <div className="container my-5">
        <div className="row justify-content-between gap-4">
          <div className="card sf-contact-addresscard text-center">
            <div className="card-body">
              <h1 className="sf-contact-icon">
                <HiLocationMarker />
              </h1>
              <h4 className="fw-bold">ADDRESS</h4>
              <p className="fs-5">No.22/6, 3 Phase, XXX Street Kancheepuram, Tamilnadu, 631501</p>
            </div>
          </div>

          <div className="card sf-contact-addresscard text-center">
            <div className="card-body">
              <h1 className="sf-contact-icon">
                <HiOutlineMail />
              </h1>
              <h4 className="fw-bold">E-MAIL</h4>
              <p className="fs-5">
                <a href="mailto:info@starflit.com">info@starflit.com</a>
              </p>
            </div>
          </div>

          <div className="card sf-contact-addresscard text-center">
            <div className="card-body">
              <h1 className="sf-contact-icon">
                <FaPhoneVolume />
              </h1>
              <h4 className="fw-bold">PHONE</h4>
              <p className="fs-5"> 91 98430 98430</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6">
            <div>
              <form className="sf-contact-form">
                <h1 className="sf-form-topic">
                  <u>Get in Touch</u>
                </h1>
                <label className="form-label"></label>
                <input type="Text" className="form-control mb-5" id="exampleInputText" placeholder="Name" />
                <div className="d-flex">
                  <label className="form-label"></label>
                  <input type="tel" className="form-control mb-5 me-5" id="Phone Number" placeholder="Phone Number" />
                  <label className="form-label"></label>
                  <input type="email" className="form-control mb-5" id="exampleInputEmail1" placeholder="E-Mail" />
                </div>
                <div class="mb-3">
                  <textarea class="form-control" id="floatingTextarea" placeholder="Message..."></textarea>
                  <label for="floatingTextarea"></label>
                </div>
                <button type="submit" className="sf-button">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-6 m-auto d-flex justify-content-center">
            <img src={ContactImg} alt="Contact-Img" className="sf-contact-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
