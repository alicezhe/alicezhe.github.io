import React from "react";
import "./Home.css"
import { Link, withRouter } from "react-router-dom";

function Home() {
  return (
    <div class="page">
      <div class="container-fluid">
        <div class="row d-flex justify-items-center align-items-center my-3 m-sm-0">
          <div class="col-1 col-lg-3"></div>
          <div class="col-10 col-lg-6">
            <h1>Hi, I'm Alice! <span class="wave">👋</span></h1>
            <p>
            I’m an undergraduate at the University of Pennsylvania pursuing a BSE in computer science and minors in economics, lingusitics, and math. I’m passionate about web dev, UI/UX design, natural language processing, and data science. 
            </p>
            <p>
            I’m particularly interested in teaching STEM and the way technology can reshape our educational experiences. In the past, I’ve worked with organizations like Girls Who Code, the Smithsonian Center for Learning and Digital Access, Girls Lead in Science and Technology, STEMclusive, and Coded by Kids to transform learning through technology, and I hope that I can continue doing so in the future.
            </p>
            <Link class="projects-btn btn" to="/projects">
              Check out my work →
            </Link>
          </div>
          <div class="col-1 col-lg-3"></div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Home);
