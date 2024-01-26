import quote from "/testimonial/quote.png";
import pause from "/testimonial/Vector.png";
import user from "/testimonial/Ellipse.png";
import user2 from "/testimonial/user2.png";
import mic from "/testimonial/Vector1.png";

export default function Testimonials() {
    const myStyle = {
        "height": "2px",
        "width": "100%"
    }
    return (
        <section className='container p-4 my-5' style={{ background: "#F7F5F9" }}>
            <div className='d-flex flex-row align-items-center gap-3 justify-content-center justify-content-md-center justify-content-lg-start' >
                <div className="d-flex justify-centent-cent align-items-center" style={{ height: "1.5rem ", width: "1.5rem" }}>
                    <img className="h-100 w-100" src={quote} alt="" />
                </div>
                <span className='fw-bolder'>Testimonials</span>
            </div>
            <div className="py-3">
                <p className='text-secondary text-center text-md-center text-lg-start'>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p>
            </div>
            <div className="d-flex flex-column-reverse flex-md-column-reverse flex-lg-row gap-5 ">
                <div className="d-flex justify-content-between align-items-center rounded p-3 col-12 col-md-12 col-lg-8" style={{ background: "#CCC1DA" }}>
                    <div className="rounded-circle bg-white d-flex align-items-center justify-content-center" style={{ height: "2rem", width: "2rem" }}>
                        <img style={{ marginLeft: "3px" }} src={pause} alt="" />
                    </div>
                    <div className="d-flex flex-row p-2 align-items-center" style={{ width: "80%" }}>
                        <span className="rounded-circle" style={{ background: "#8064A2", height: ".7rem", width: ".7rem" }}></span>
                        <div className="bg-white" style={myStyle}></div>
                        <span className="ms-2" style={{ color: "#8064A2" }}>0:00</span>
                    </div>
                    <div className="">
                        <span>
                            {/* <img  src={mic} alt="" /> */}
                        </span>
                        <img src={user} alt="" />
                    </div>
                </div>
                <div className="h-100 d-flex align-items-center col-12 col-md-12 col-lg-3 justify-content-center justify-content-md-center justify-content-lg-between ">
                    <div className="d-flex flex-row align-items-center gap-4">
                        <img className="h-100" src={user2} alt="" />
                        <div>
                            <div style={{ color: "#8064A2" }}>
                                <span className="fw-semibold">Shubha Nagarajan</span>
                            </div>
                            <a className="fs-6 text-decoration-none">Classical Dancer</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
