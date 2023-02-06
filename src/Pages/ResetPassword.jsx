import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="text-center my-5">Forgot Password?</h1>
            <div class="card fl-forgotpassword-card text-center my-3">
              <div class="card-body">
                <form>
                  <h3 className="mb-3" style={{ color: "#119744" }}>
                    Any Issue?
                  </h3>
                  <p>Make Sure Your Current Password Is Strong</p>
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control mb-3"
                    id="exampleInputEmail1"
                    placeholder="New Password"
                  />
                  <label className="form-label"></label>
                  <input
                    type="email"
                    className="form-control mb-5"
                    id="exampleInputEmail1"
                    placeholder="Repeat Password"
                  />
                  <button type="submit" className="sf-button">
                    Change Password
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

export default ResetPassword;
