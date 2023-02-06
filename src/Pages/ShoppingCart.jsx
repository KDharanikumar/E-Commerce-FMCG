import Delete from "../Images/Delete.png";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export const ShoppingCart = () => {
  return (
    <section>
      <div className="container my-5">
        <div className="row">
          <div className="col-8">
            <h3 className="text-center mb-4">Your Orders</h3>
            <table className="sf-shopcart-table">
              <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
              <tr className="sf-shopcart-data text-center">
                <td>1</td>
                <td>Hai</td>
                <td>Dharan</td>
                <td>
                  <span className="fs-5" style={{ color: "#119744" }}>
                    <FaMinusCircle />
                  </span>
                  <span className="mx-2">
                    5<span className="fw-light"> /Kg</span>
                  </span>
                  <span className="fs-5" style={{ color: "#119744" }}>
                    <FaPlusCircle />
                  </span>
                </td>
                <td>500</td>
                <td>
                  <img src={Delete} alt="delete-icon" className="sf-delete-icon" />
                </td>
              </tr>
            </table>
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
                <Link to="/checkout" style={{ textDecoration: "none" }}>
                  <button className="sf-button mt-4 w-100 mb-0">Processed to Checkout</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
