import React from 'react'
import './Home.css'
import { Link, withRouter } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-12 flex justify-items-center items-center my-3 m-sm-0">
          <div className="col-span-1 lg:col-span-3 2xl:col-span-4" />
          <div className="col-span-10 lg:col-span-6 2xl:col-span-4">
            <h1>
              Hi, I&apos;m Alice!
              {' '}
              <span className="wave">👋</span>
            </h1>
            <p className="mb-4">
              I’m an undergraduate at the University of Pennsylvania pursuing a BSE in computer science and minors in economics, lingusitics, and math. I’m passionate about web dev, UI/UX design, natural language processing, and data science.
            </p>
            <p className="mb-4">
              I’m particularly interested in teaching STEM and the way technology can reshape our educational experiences. In the past, I’ve worked with organizations like Girls Who Code, the Smithsonian Center for Learning and Digital Access, Girls Lead in Science and Technology, STEMclusive, and Coded by Kids to transform learning through technology, and I hope that I can continue doing so in the future :)
            </p>
            <Link
              className="bg-[#EBEBEB] rounded-xl inline-block p-2 transition ease-in-out duration-200 hover:shadow-md"
              to="/projects"
            >
              Check out my work →
            </Link>
          </div>
          <div className="col-span-1 lg:col-span-3 2xl:col-span-4" />
        </div>
      </div>
    </div>
  )
}

export default withRouter(Home)
