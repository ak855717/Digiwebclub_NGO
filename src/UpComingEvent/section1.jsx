import img1 from "../assets/UpcomingEvent/image (4).jpg"
import img2 from "../assets/UpcomingEvent/image (5).jpg"
import img3 from "../assets/UpcomingEvent/image (1).jpg"
import img4 from "../assets/UpcomingEvent/image (2).jpg"
import img5 from "../assets/UpcomingEvent/image (3).jpg"

const section1 = () => {
    return (
        <>
            <div className="max-w-5xl mx-auto py-15">
                <div className="px-4 ">
                    <h1 className="text-center text-3xl font-bold pb-10">
                        19th Exceed Environment, HR & CSR Awards & Conference 2025 Climate
                        Change-Sustainability Building A Resilient India
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
                <div className="max-w-5xl mx-auto px-4">
                    <h1 className="text-center text-3xl font-bold pb-10 pt-20">
                        19th Exceed Environment, HR & CSR Awards & Conference 2025 Climate
                        Change-Sustainability Building A Resilient India
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default section1