export default function Feature() {
    const data = [
        { title: "People", src: "people", description: "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator.", text: "Connect" },
        { title: "Place", src: "location", description: "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.", text: "Meet up" },
        { title: "Product", src: "bag", description: "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members.", text: "Get it" },
        { title: "Program", src: "event", description: "Find events, meetups and workshops related to your hobby.  Register or buy tickets online.", text: "Attend" },
    ]

    return (
        <section className=' container py-5'>
            <div className="row">
                {data.map((item, i) => (
                    <div key={i} className="col-12 col-md-12 col-lg-6 mb-4">
                        <div className="card">
                            <div className="card-body p-4">
                                <div className='d-flex flex-row gap-2 justify-content-center justify-content-md-center justify-content-lg-start'>
                                    <div className='d-flex justify-content-center align-items-center'>
                                        <img style={{height: "1.5rem", width: "1.5rem"}} src={`/feature/${item.src}.png`} alt="" />
                                    </div>
                                    <h5 className="card-title">{item.title}</h5>
                                </div>
                                <p className="card-text py-3">{item.description}</p>
                                <button className='btn rounded px-3 col-12 col-md-12 col-lg-3' style={{ borderColor: "#8064A2" }}>
                                    {item.text}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
