import { useEffect, useState } from "react";
import facebook from "/footer/facebook.png";
import twitter from "/footer/twitter.png";
import instagram from "/footer/instagram.png";
import printerest from "/footer/pinterest.png";
import google from "/footer/googleplus.png";
import youtube from "/footer/youtube.png";
import telegram from "/footer/telegram.png";
import mail from "/footer/mail.png";
import arrow from "/footer/arrow.png";
import "../app.css";

export default function Footer() {
    const [color, setColor] = useState("#FFFFFF");

    const data = [
        { title: "People", src: "people2", color: "#8064A2", style: { backgroundColor: "#8064A2", color: "#ffffff" }, description: "Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.", text: "Connect" },
        { title: "Place", src: "location2", color: "#77933C", style: { backgroundColor: "#77933C", color: "#ffffff" }, description: "Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.", text: "Meet up" },
        { title: "Product", src: "bag2", color: "#C0504D", style: { backgroundColor: "#C0504D", color: "#ffffff" }, description: "Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.", text: "Get it" },
        { title: "Program", src: "event2", color: "#0096C8", style: { backgroundColor: "#0096C8", color: "#ffffff" }, description: "Find events, meetups and workshops related to your hobby. Register or buy tickets online.", text: "Attend" },
    ];
    onchange = () => {
        setColor("#8064A2")
    }

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setColor('#FFFFFF'); // Revert to original color after 2000 milliseconds (2 seconds)
        }, 1000);

        return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount or color change
    }, [color]);
    return (
        <>
            <footer className="text-center text-lg-start bg-white text-muted">
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="w-100 d-flex justify-content-end">
                            <a href="#navbar" className="m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }}>
                                <img src={arrow} alt="" />
                            </a>
                        </div>
                        <div className="row mt-3 mx-1">
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column justify-content-start align-items-start">
                                <h6 className="fw-bolder mb-3 text-black">
                                    Hobbycue
                                </h6>
                                <div>
                                    <a href="#!" className="text-reset">About Us</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Our services</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Work with Us</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">FAQ</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Contact Us</a>
                                </div>
                            </div>
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column justify-content-start align-items-start">

                                <h6 className="fw-bold mb-3 text-black">
                                    Products
                                </h6>
                                <div>
                                    <a href="#!" className="text-reset">Sign Up</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Add a Listing</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Claim Listing</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Post a Query</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Add a Blog Post</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Other Query</a>
                                </div>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 d-flex flex-column justify-content-start align-items-start">

                                <h6 className="fw-bold mb-3 text-black">
                                    Useful links
                                </h6>
                                <div>
                                    <a href="#!" className="text-reset">Listing</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Blog Posting</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Shop / Store</a>
                                </div>
                                <div>
                                    <a href="#!" className="text-reset">Community</a>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 d-flex flex-column justify-content-start align-items-start">
                                <h6 className="fw-bolder mb-3 text-black">Contact</h6>
                                <div className="d-flex flex-row gap-3 w-100 flex-wrap">
                                    <a data-mdb-ripple-init className="my-1 me-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={facebook} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={twitter} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={instagram} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={printerest} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={google} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={youtube} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={telegram} alt="" />
                                    </a>
                                    <a data-mdb-ripple-init className=" m-1 rounded-circle bg-body-secondary d-flex justify-content-center align-items-center" style={{ height: "1.5rem", width: "1.5rem" }} href="#!" role="button">
                                        <img src={mail} alt="" />
                                    </a>
                                </div>
                                <h6 className="fw-bolder my-3 text-black">Invite Friends</h6>
                                <form className=" d-flex w-100 mb-3" role="search">
                                    <input className="border border-end-0 rounded-start p-2 text-secondary w-75 " style={{ backgroundColor: "#F8F9FA", fontSize: 0.8 + "rem" }} type="search" placeholder="Search here" aria-label="Search" />
                                    <div className="px-3 justify-content-center align-items-center rounded-end d-flex text-white" style={{ backgroundColor: "#8064A2" }} type="submit">Invite</div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    ©
                    <a className="text-reset fw-bold text-decoration-none" href="">Purple Cues Private Limited</a>
                </div>
            </footer>
            <div className="position-fixed bottom-0 p-5 px-3  zindex-1 d-flex d-md-flex d-xl-none justify-content-end w-100" onClick={onchange}>
                <a href="#navbar" className="m-1 rounded-circle border d-flex justify-content-center align-items-center" style={{ height: "2.5rem", width: "2.5rem", backgroundColor: color }}>
                    <img src={arrow} alt="" />
                </a>
            </div>
        </>
    )
}
