import { Link } from "react-router-dom";
import SignIn from "../Images/SignIn.jpg";

export const Register = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="my-5">Create an Account</h1>
            <form className="sf-login-form">
              <label className="form-label">User Name</label>
              <input type="email" className="form-control mb-3" id="exampleInputEmail1" />
              <label className="form-label">E-Mail</label>
              <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
              <label className="form-label">Password</label>
              <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
              <label className="form-label">Confirm Password</label>
              <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
            </form>
            <div>
              <button type="submit" className="sf-button">
                Sign In
              </button>
            </div>
            <div>
              <p>
                Already have an Account?
                <Link to="/login" style={{ textDecoration: "none" }}>
                  <span className="fs-6 mx-2" style={{ color: "#119744" }}>
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img src={SignIn} alt="Login-Img" className="sf-signin-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
