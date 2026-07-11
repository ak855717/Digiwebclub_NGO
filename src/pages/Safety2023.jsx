import Hero from '../components/Hero'
import img1 from "../assets/Safety2023/image (1).jpg"
import img2 from "../assets/Safety2023/image (2).jpg"

const Safety2023 = () => {
    return (
        <div>
            <Hero title="Past Event - Safety 2023" currentPage="Past Event - Safety 2023" />

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
        </div>
    )
}

export default Safety2023