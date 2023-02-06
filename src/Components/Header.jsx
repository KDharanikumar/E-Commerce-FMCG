import { Link } from "react-router-dom";
import Search from "./Search";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  return (
    <section>
      <div classNameName="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center">
              <div>
                <Link to="/">
                  <h3>STARFLIT</h3>
                </Link>
              </div>
              <nav className="navbar navbar-expand-lg">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/">Shop</Link>
                    </li>

                    <li class="nav-item dropdown">
                      <Link
                        class="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Category
                      </Link>
                      <ul className="dropdown-menu">
                        <li className="dropdown-item">
                          <Link to="category-fruits">Fruits</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="category-vegetables">Vegetables</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="category-drinks">Drinks</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="category-bakery">Bakery</Link>
                        </li>
                        <li className="dropdown-item">
                          <Link to="category-snacks">Snacks</Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link to="aboutus">About Us</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="login">Login</Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <li>
                    <Search />
                  </li>
                  <li>
                    <Link to="/cart" style={{ textDecoration: "none" }}>
                      <span className="text-black">
                        <FaShoppingBasket className="fs-5" />
                      </span>
                    </Link>
                  </li>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
