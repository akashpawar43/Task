import React from 'react';
import herosvg from '/hero/herogroup.png';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Link } from "react-router-dom";
import SignIn from './SignIn';
import JoinIn from './JoinIn';

export default function Hero() {
  const myStyle = {
    "minHeight": "calc(100vh - 5.3rem)",
    "background": "#F7F5F9"
  }
  return (
    <section className='d-flex flex-row' style={myStyle}>
      <div className='container pt-2 pt-md-5  mt-0 mt-md-4 mt-lg-4 d-flex flex-column flex-md-column flex-lg-row'>
        <div className=' h-100 d-flex justify-content-between flex-column w-100 w-md-100 w-lg-50'>
          {/* <div className=' w-sm-100 w-md-100 h-100 d-flex justify-content-between flex-column' style={{ width: "65%" }}> */}
          <div>
            <div className='fs-3 fst-italic fw-bolder mb-3'>
              Explore your <span style={{ color: "#0096C8" }}>hobby</span> or <span style={{ color: "#8064A2" }}>passion</span>
            </div>
            <div className='my-3'>
              Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
            </div>
            <div className='d-none d-md-block d-lg-block'>
              If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.
            </div>
          </div>
          <div>
            <img className='bottom-0 w-100 d-none d-md-none d-lg-block' src={herosvg} alt="" />
          </div>
        </div>
        <div className='ms-0 ms-md-0 ms-lg-5 ps-0 ps-md-0 ps-lg-5 h-100 w-100 w-md-100 w-lg-50 d-flex justify-sm-content-between justify-md-content-between justify-lg-content-start flex-column'>
          {/* <div className=' h-100 ps-5' style={{ width: "35%" }}> */}
          <div>
            <ul className='navbar-nav flex-row gap-4 justify-content-center justify-content-md-center justify-content-lg-start'>
              <li className='nav-item'><Link className='nav-link fw-semibold' id='nav-link-1' to="/" style={{ color: "#8064A2" }}>Sign In</Link></li>
              <li className='nav-item'><Link className='nav-link fw-semibold' id='nav-link-2' to="/joinin" style={{ color: "#8064A2" }}>Join In</Link></li>
              {/* <li className='nav-item'><Link className='nav-link fw-semibold' to="/" style={{ borderBottom: "solid 2px #8064A2", color: "#8064A2" }}>Sign In</Link></li>
              <li className='nav-item'><Link className='nav-link fw-semibold' to="/joinin" style={{ borderBottom: "solid 2px #8064A2", color: "#8064A2" }}>Join In</Link></li> */}
            </ul>
          </div>
          <div className='top-0'>
            <Routes>
              <Route path='/' element={<SignIn />} />
              <Route path='/joinin' element={<JoinIn />} />
            </Routes>
          </div>
          <div>
            <img className='bottom-0 w-100 d-block d-md-block d-lg-none' src={herosvg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
