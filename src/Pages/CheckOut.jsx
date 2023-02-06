import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <h3>Billing Details</h3>
          <div className="col-8">
            <form className="sf-address-form">
              <label className="form-label">Name</label>
              <input type="text" className="form-control mb-3" id="exampleInputtext" />
              <label className="form-label">E-Mail</label>
              <input type="email" className="form-control mb-3" id="exampleInputEmail1" />
              <label className="form-label">Phone No</label>
              <input type="number" className="form-control mb-3" id="exampleInputnumber" />
              <label className="form-label">Address</label>
              <input type="text" className="form-control mb-3" id="exampleInputtext1" />
              <label className="form-label">Additional Information</label>
              <textarea type="text" className="form-control mb-3" id="exampleInputtext" />
            </form>
          </div>
          <div className="col-4 p-3">
            <div class="card p-3">
              <div class="card-body text-start">
                <h5 className="fw-bold">Cart Total</h5>
                <hr style={{ color: "#119744", border: "2px solid" }}></hr>
                <div className="sf-cart-total">
                  <div className="d-flex justify-content-between">
                    <p>Sub Total</p>
                    <p>100.00</p>
                  </div>
                  <hr></hr>
                  <div className="d-flex justify-content-between">
                    <p>Total</p>
                    <p>100.00</p>
                  </div>
                </div>
                <hr></hr>
                <Link to="/placeorder" style={{ textDecoration: "none" }}>
                  <button className="sf-button mt-4 w-100 mb-0">Place Order</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
