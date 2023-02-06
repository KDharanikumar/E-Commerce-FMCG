import Banner from "../Components/Banner";
import SingleProductImg from "../Images/SingleProductImg.jpg";
import Data from "../Data.json";

const SingleProduct = () => {
  return (
    <section>
      <div className="container-fluid">
        <div className="row">
          <Banner />
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6 sf-singleproduct-img text-center">
            <img src={SingleProductImg} alt="img" />
          </div>
          <div className="col-6 sf-singleproduct-details pe-5">
            <h2 className="mb-3">Product Name</h2>
            <h4 className="mb-5">100/Kg</h4>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis. Lorem ipsum
              dolor sit amet consectetur adipisicing tempora pariatur provident animi debitis
            </p>
            <button className="sf-button">Add to Cart</button>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
