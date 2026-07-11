import Hero from "../components/Hero"
import img1 from "../assets/Enviroment/image (1).jpg"
import img2 from "../assets/Enviroment/image (2).jpg"
import img3 from "../assets/Enviroment/image (3).jpg"
import img4 from "../assets/Enviroment/image (4).jpg"
import img5 from "../assets/Enviroment/image (5).jpg"

const Environment = () => {
    return (
        <div>
            <Hero title='Past Event - Environment' currentPage='Past Event - Environment' />

            <div className="max-w-5xl mx-auto py-15">
                <div className="px-4 ">
                    <h1 className="text-center text-3xl font-bold pb-10">
                        18th Exceed Conference on " Energy Transition and Sustainable Road
                        Transportation "- Support of Ministry of Road & Transport, Govt. of India.
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-5xl mx-auto py-15">
                <div className="px-4 ">
                    <h1 className="text-center text-3xl font-bold pb-10">
                        16th EXCEED Green Future Award & Conference 2024
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <img src={img3} alt="" />
                        <img src={img4} alt="" />
                        <img src={img5} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Environment