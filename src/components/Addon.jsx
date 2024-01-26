import { Link } from "react-router-dom";
import add from "/testimonial/Add.png";

export default function Addon() {
    return (
        <section className='p-5 ' style={{ background: "#F7FDFF" }}>
            <div className='container border rounded py-5 px-4 bg-white' >
                <div className='d-flex flex-row align-items-center gap-2 justify-content-center justify-content-md-center justify-content-lg-start' >
                    <div className="d-flex justify-centent-cent align-items-center" style={{ height: "1.5rem ", width: "1.5rem" }}>
                        <img className="h-100 w-100" src={add} alt="" />
                    </div>
                    <span className='fw-bolder'>Add your own</span>
                </div>
                <div className='py-3'>
                    <p>Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page</p>
                </div>
                <Link to="/addpage">
                    <button className='btn rounded px-3' style={{ borderColor: "#8064A2", color: "#8064A2" }}>
                        Add new
                    </button>
                </Link>
            </div>
        </section>
    )
}
