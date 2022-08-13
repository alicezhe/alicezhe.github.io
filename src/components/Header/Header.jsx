import React from 'react'
import { Link, withRouter } from 'react-router-dom'

function Header({ location }) {
  return (
    <>
      <div>
        <div className="flex flex-wrap items-start justify-between m-8">
          <Link to="/" className="profile-div">
            <div className="flex items-center">
              <div className="inline-block sm:mx-3 order-2">
                <h3 className="text-2xl">Alice He</h3>
                <h4 className="text-[#A3A3A3] transition ease-in-out duration-200 hover:text-[#3D3D3D]">CS @ Penn</h4>
              </div>
              <img src="images/headshot.jpg" alt="headshot" className="w-[50px] rounded-full drop-shadow-md hidden sm:inline-block order-1" />
            </div>
          </Link>
          <div>
            <div className="flex items-center grid grid-cols-2 gap-4">
              <div className={`${location.pathname === '/' ? 'text-[#3D3D3D]' : 'text-[#A3A3A3]'}`}>
                <Link className="transition ease-in-out duration-200 hover:text-[#3D3D3D]" to="/">
                  Home
                </Link>
              </div>
              <div className={`${location.pathname === '/projects' ? 'text-[#3D3D3D]' : 'text-[#A3A3A3]'}`}>
                <Link className="transition ease-in-out duration-200 hover:text-[#3D3D3D]" to="/projects">
                  Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(Header)
