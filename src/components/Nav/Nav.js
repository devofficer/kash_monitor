import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light static-top header-a">
      <div className="container nav-container">
        <a className="navbar-brand brand" href="#">
          KashBot
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse alink"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Why Us <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Support
              </a>
            </li>

            <a
              className="btn btn-outline-dark start"
              href={process.env.REACT_APP_DISCORD_AUTH_URL}
            >
              Discord Login
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
