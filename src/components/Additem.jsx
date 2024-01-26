import React, { useState, useEffect } from 'react';
import add from "/testimonial/Add.png";
import arrow from "/footer/arrow.png";

export default function Additem() {
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
            <section className="mt-5">
                <div className="container p-5 bg-white">
                    <div className="d-flex flex-row align-items-center gap-2 justify-content-center pb-5">
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "2.5rem", width: "2.5rem" }}>
                            <img className="h-100 w-100" src={add} alt="" />
                        </div>
                        <span className="fw-bolder fs-3">Add Your Listing</span>
                    </div>
                    <div className="row">
                        {data.map((item, i) => (
                            <div key={i} className="col-12 col-md-12 col-lg-6 mb-4">
                                <div className="card" style={{ border: `2px solid ${item.color}`, transition: 'border-color 0.3s, color 0.3s', ...item.style }}>
                                    <div className="card-body p-4">
                                        <div className="d-flex flex-row gap-2 justify-content-center justify-content-md-center justify-content-lg-start">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img style={{ height: "1.5rem", width: "1.5rem" }} src={`/feature/${item.src}.png`} alt="" />
                                            </div>
                                            <h5 className="card-title">{item.title}</h5>
                                        </div>
                                        <p className="card-text py-3">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="position-fixed bottom-0 p-5 px-3 border zindex-1 d-flex d-md-flex d-xl-none justify-content-end w-100" onClick={onchange}>
                <a href="#navbar" className="m-1 rounded-circle border d-flex justify-content-center align-items-center" style={{ height: "2.5rem", width: "2.5rem", backgroundColor: color }}>
                    <img src={arrow} alt="" />
                </a>
            </div>
        </>
    );
}
