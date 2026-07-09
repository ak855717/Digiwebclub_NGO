import Hero from '../components/Hero'
import Approach from '../About/Approach'
import AboutUs from '../home/AboutUs'
import OurStory from '../home/ourStory'

const About = () => {
    return (
        <div>
            <Hero title='About Us' currentPage='About Us' />
            <AboutUs />
            <Approach />
            <OurStory />
        </div>
    )
}

export default About