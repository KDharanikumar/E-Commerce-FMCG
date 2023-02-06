import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center my-5">Forgot Password?</h1>
            <div class="card fl-forgotpassword-card text-center">
              <div class="card-body">
                <form>
                  <h3 className="mb-3" style={{ color: "#119744" }}>
                    Worried?
                  </h3>
                  <p>No Problem! Just Follow The Simple Way</p>
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control mb-5"
                    id="exampleInputEmail1"
                    placeholder="Enter Your Email"
                  />
                  <button type="submit" className="sf-button">
                    Reset Password
                  </button>
                  <p>
                    Go Back To
                    <Link to="/login" style={{ textDecoration: "none" }}>
                      <span className="mx-2 fw-bold" style={{ color: "#119744" }}>
                        Login Here
                      </span>
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
