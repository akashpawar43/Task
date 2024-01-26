import banner from "/footer/Group.png"

export default function Getstarted() {
    return (
        <section style={{background: "#F7FDFF"}}>
            <div className='container py-5'>
                <div className='fs-3 fst-italic fw-semibold mb-3'>
                    Your <span style={{ color: "#8064A2" }} >hobby</span>, Your <span style={{ color: "#0096C8" }}>Community...</span>
                </div>
                <button type="button" className="btn text-white fw-semibold" style={{background: "#8064A2"}}>Get started</button>
                <div className="w-100 mt-5">
                    <img className="w-100" src={banner} alt="" />
                </div>
            </div>
        </section>
    )
}
