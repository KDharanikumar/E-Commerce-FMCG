import Banner from "../Components/Banner";
import AboutImg from "../Images/AboutImg.jpg";
import Ceo from "../Images/Ceo.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import Testimonial from "../Components/Testimonial";

const AboutUs = () => {
  const [testm, settestm] = useState([]);

  useEffect(() => {
    const testData = async () => {
      const response = await axios.get("https://testimonialapi.toolcarton.com/api");
      settestm(response.data);
    };
    testData();
  }, []);

  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Banner />
        </div>
      </div>
      <div className="container">
        <div className="row my-5">
          <h1>Why Starflit</h1>
          <div className="col-6 d-flex justify-content-between my-5">
            <div className="col-6">
              <div className="mb-5">
                <h5>100% Fresh Organic Food</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis</p>
              </div>
              <div>
                <h5>Home Delivery</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis</p>
              </div>
            </div>
            <div className="col-6">
              <div className="mb-5">
                <h5>Best Price</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis</p>
              </div>
              <div>
                <h5>Quick Refund</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis</p>
              </div>
            </div>
          </div>
          <div className="col-6">
            <img src={AboutImg} alt="Img" className="sf-about-img" />
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <h1 className="text-center mb-5">Our Team</h1>
        <div className="row">
          <div className="col d-flex justify-content-between text-center">
            <div>
              <img src={Ceo} alt="team-img" className="sf-team-img" />
              <h4>Name</h4>
              <h5>Destination</h5>
            </div>
            <div>
              <img src={Ceo} alt="team-img" className="sf-team-img" />
              <h4>Name</h4>
              <h5>Destination</h5>
            </div>
            <div>
              <img src={Ceo} alt="team-img" className="sf-team-img" />
              <h4>Name</h4>
              <h5>Destination</h5>
            </div>
            <div>
              <img src={Ceo} alt="team-img" className="sf-team-img" />
              <h4>Name</h4>
              <h5>Destination</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row text-center">
          <h4 className="mb-3 fw-bold">Testimonial</h4>
          <h1>What Client's Say</h1>
          <Testimonial testm={testm} />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
