import React, { useEffect } from 'react';
import google from '/hero/Google.png';
import facebook from '/hero/Facebook.png';
import lock from '/hero/lock.png';
import password from '/hero/Password.png';

export default function JoinIn() {
  const myStyle = {
    "height": "1px",
    "width": "33%",
  }
  useEffect(() => {
    const navLink = document.getElementById("nav-link-2");
    if (navLink) {
      navLink.style.borderBottom = "solid 2px #8064A2";
      return () => {
        navLink.style.borderBottom = ""; // or null, or whatever default value you want
      };
    }
  }, []);
  return (
    <section>
      <div className='d-flex flex-column'>
        {/* login with google and facebook field */}
        <div className='my-4 d-flex flex-column gap-3'>
          <a href="" className='text-decoration-none text-black'>
            <div className='d-flex flex-row justify-content-between p-2 px-3 rounded' style={{ border: "solid 2px #8064A2" }}>
              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <span className="fw-semibold">Continue with Google</span>
              </div>
              <div></div>
            </div>
          </a>
          <a href="" className='text-decoration-none text-black'>
            <div className='d-flex flex-row justify-content-between p-2 px-3 rounded' style={{ border: "solid 2px #8064A2" }}>
              <div>
                <img src={facebook} alt="" />
              </div>
              <div>
                <span className="fw-semibold">Continue with Google</span>
              </div>
              <div></div>
            </div>
          </a>
        </div>
        <div className='d-flex flex-row justify-content-between align-items-center'>
          <div className=' bg-secondary' style={myStyle}></div>
          <div>
            <span>Or connect with</span>
          </div>
          <div className=' bg-secondary' style={myStyle}></div>
        </div>

        <div className='my-3 d-flex flex-column gap-3'>
          <div className=''><input className='w-100 rounded p-2 px-3 border border-light-subtle' type="email" placeholder='Email' /></div>
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <input className='w-100 rounded p-2 px-3 border border-light-subtle' type="password" placeholder='Password' />
            <div className='h-100 d-flex align-items-center right-0 px-3 position-relative' style={{marginLeft: "-5rem"}}>
              <img src={password} alt="" />
            </div>
          </div>
        </div>

        {/* check box and forget password field */}
        <div className='d-flex flx-row justify-content-between'>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Default checkbox
            </label>
          </div>
          <div className='d-flex flx-row align-items-center'>
            <div>
              <img src={lock} alt="" />
            </div>
            <span>Forget password</span>
          </div>
        </div>

        <a href="" className='text-decoration-none text-black'>
            <button className='d-flex flex-row justify-content-center p-2 px-3 rounded mt-3 mb-2 mb-md-5 w-100 text-white' style={{ border: "solid 2px #8064A2", backgroundColor: "#8064A2" }}>
              <span className="fw-semibold">Agree and Continue</span>
            </button>
        </a>
      </div>
    </section>
  )
}
