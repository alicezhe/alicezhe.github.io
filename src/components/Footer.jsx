import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <footer class="m-2 m-sm-4">
        <div class="container-fluid d-flex justify-content-between">
          <div class="footer-links">
            <p class="m-0">Elsewhere - <span><a href="https://github.com/alicezhe" target="_blank" rel="noopener noreferrer">Github</a></span>, <span><a href="https://www.linkedin.com/in/alicezhe/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>, <span><a href="https://drive.google.com/file/d/1UWbafShrPyys4-xBRP-mRj7etK-xRgLm/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></span>, <span><a href="mailto:healice@seas.upenn.edu" target="_blank" rel="noopener noreferrer">Email</a></span></p>
          </div>
          <div class="d-none d-md-block d-flex align-items-center">
            <img src="images/online.svg" alt="" class="d-inline-block pe-2"/>
            <h4 class="d-inline-block m-0">Currently at <span class="footer-links"><a class="company-name" href="https://draftstudios.io/">Draft Studios</a></span></h4>
          </div>
        </div>  
      </footer>
    </div>
  );
}

export default Footer;