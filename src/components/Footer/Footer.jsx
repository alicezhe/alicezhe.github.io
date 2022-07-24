import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <footer className="m-8">
        <div className="flex justify-between">
          <div className="footer-links">
            <p className="m-0">
              Elsewhere -
              {' '}
              <span><a href="https://github.com/alicezhe" target="_blank" rel="noopener noreferrer">Github</a></span>
              ,
              {' '}
              <span><a href="https://www.linkedin.com/in/alicezhe/" target="_blank" rel="noopener noreferrer">LinkedIn</a></span>
              ,
              {' '}
              <span><a href="https://drive.google.com/file/d/1UWbafShrPyys4-xBRP-mRj7etK-xRgLm/view?usp=sharing" target="_blank" rel="noopener noreferrer">CV</a></span>
              ,
              {' '}
              <span><a href="mailto:healice@seas.upenn.edu" target="_blank" rel="noopener noreferrer">Email</a></span>
            </p>
          </div>
          <div className="hidden md:block flex items-start">
            <img src="images/online.svg" alt="" className="inline-block pr-2" />
            <h4 className="inline-block m-0">
              Currently at
              {' '}
              <span className="footer-links"><a className="text-[#3D3D3D]" href="https://www.vanguard.com/">Vanguard</a></span>
            </h4>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
