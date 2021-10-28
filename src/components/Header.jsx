import React from 'react'
import './Header.css';
import { Link, withRouter } from "react-router-dom";

function Header(props) {
    return (
      <>
      <div class="header">
        <nav class="navbar navbar-expand py-0 m-0 mx-sm-3">
          <div class="container-fluid d-flex justify-content-between">
            <Link to="/" class="profile-div">
              <div class="d-flex align-items-center">
                <div class="d-inline-block m-3 order-2">
                  <h3 class="m-0">Alice He</h3>
                  <h4 class="m-0">CS @ Penn</h4>
                </div>
                <img src="images/headshot.jpg" alt="headshot" class="profile-pic d-none d-sm-inline-block order-1"/>
              </div>
            </Link>

            <div>
              <ul class="navbar-nav ml-auto">
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li
                  class={`nav-item  ${
                    props.location.pathname === "/projects" ? "active" : ""
                  }`}
                >
                  <Link class="nav-link" to="/projects">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  )
}

export default withRouter(Header)
