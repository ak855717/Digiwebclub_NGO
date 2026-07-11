import Hero from '../components/Hero'
import img1 from "../assets/Safety/image (1).jpg"
import img2 from "../assets/Safety/image (2).jpg"

const Safety2024 = () => {
    return (
        <div>
            <Hero  title="Past Event - Safety" currentPage="Past Event - Safety" />
            <div className="max-w-5xl mx-auto py-15">
                <div className="px-4 ">
                    <h1 className="text-center text-3xl font-bold pb-10">
                        17th EXCEED Occupational Health Safety & Security Awards and Conference on
                        :"360 Degree Safety at Work place 2024 " on 20th January 2025, Radisson Blu,
                        Jaipur Rajasthan
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

export default Safety2024