import { Link } from "react-router-dom";
import SignIn from "../Images/SignIn.jpg";

const Login = () => {
  return (
    <section>
      <div className="container p-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="my-5">Login</h1>
            <form className="sf-login-form">
              <label className="form-label">E-Mail</label>
              <input type="email" className="form-control mb-3" id="exampleInputEmail1" />
              <label className="form-label">Password</label>
              <input type="password" className="form-control mb-3" id="exampleInputPassword1" />
            </form>
            <div className="text-end my-4">
              <Link to="/forgotpassword" style={{ textDecoration: "none" }}>
                <span className="text-black">Forgot Password?</span>
              </Link>
            </div>
            <div>
              <button type="submit" className="sf-button">
                Sign In
              </button>
            </div>
            <div>
              <p>
                Don't Have an Account?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  <span className="fs-6 mx-2" style={{ color: "#119744" }}>
                    Register
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

export default Login;
