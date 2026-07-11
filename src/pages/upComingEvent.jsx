import Hero from "../components/Hero"
import Section1 from "../UpComingEvent/section1"
const upComingEvent = () => {
    return (
        <div>
            <Hero title="Upcoming Event" currentPage="Upcoming Event" />
            <Section1 />
        </div>
    )
}

export default upComingEvent