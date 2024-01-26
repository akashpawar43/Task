import React from 'react';
import logo from '/navbar/HobbyCueLogo.png'
import logo2 from '/navbar/HobbyCueLogo1.png'
import logo22 from '/navbar/logo22.png'
import search from '/navbar/Vector.png'
import caret from '/navbar/Vector1.png'
import save from '/navbar/Vector2.png'
import bell from '/navbar/Vector3.png'
import cart from '/navbar/Product3.png'
import explore from '/navbar/Explore.png'
import hobby from '/navbar/Hobbies.png'
import search2 from '/navbar/search2.png';
import menu from '/navbar/menu.png'

export default function Navbar() {
    const myStyle = {
        "background": "var(--Grey-white, #FFF)",
        "boxShadow": "0px 2px 12px 0px rgba(0, 0, 0, 0.08)"
    }
    const shadowbox = {
        "marginTop": 1.5 + "rem",
        "boxShadow": "0px 8px 12px 0px rgba(147, 156, 163, 0.12), 0px 0px 2px 0px rgba(147, 156, 163, 0.36)"
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg top-0" id='navbar' style={myStyle}>
                <div className="container-fluid container">
                    <div className='d-flex justify-content-around w-100'>
                        <div className='d-flex flex-row justify-content-between justify-md-content-between justify-xl-content-center align-item-center'>
                            <a className="navbar-brand d-none d-md-none d-lg-block" href="/"><img src={logo2} alt="" /></a>
                            <a className="navbar-brand d-lg-none" href="/"><img src={logo22} alt="" /></a>
                            <div className="d-flex d-md-flex d-lg-none gap-3 align-items-center ms-5" aria-label="Toggle navigation">
                                <img src={search2} alt="" />
                                <img src={bell} alt="" />
                                <img src={menu} alt="" />
                            </div>
                            <form className=" py-3 px-2 sm-hidden d-none d-md-none d-lg-flex" role="search" style={{ width: 20 + "rem" }}>
                                <input className="border border-end-0 rounded-start p-2 text-secondary w-75 d-sm-none d-md-block" style={{ backgroundColor: "#F8F9FA", fontSize: 0.8 + "rem" }} type="search" placeholder="Search here" aria-label="Search" />
                                <div className="px-3 justify-content-center align-items-center rounded-end d-sm-none d-md-flex" style={{ backgroundColor: "#8064A2" }} type="submit"><img src={search} alt="" /></div>
                            </form>
                        </div>
                        <div className="collapse navbar-collapse d-sm-none" id="navbarSupportedContent">
                            <div className='d-flex justify-content-end w-100'>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <a className="nav-link text-black d-flex align-items-center flex-row gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={explore} alt="" /> Explore <img src={caret} alt="" />
                                        </a>
                                        <ul className="dropdown-menu" style={{ marginTop: 1.5 + "rem" }}>
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item dropdown d-flex align-items-center">
                                        <a className="nav-link text-black d-flex align-items-center flex-row gap-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            <img src={hobby} alt="" /> Hobbies <img src={caret} alt="" />
                                        </a>
                                        <ul className="dropdown-menu border-0" style={shadowbox}>
                                            <li><a className="dropdown-item" href="#">People - Community</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Products - Store</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Blogs</a></li>
                                        </ul>
                                    </li>
                                </ul>
                                <div className='d-flex flex-row gap-4 justify-content-center align-item-center m-2'>
                                    <div className='d-flex align-items-center'>
                                        <img src={save} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img src={bell} alt="" />
                                    </div>
                                    <div className='d-flex align-items-center'>
                                        <img src={cart} alt="" />
                                    </div>
                                </div>
                                <a href="#">
                                    <button className='btn rounded px-3' style={{ borderColor: "#8064A2" }}>
                                        Sign in
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
