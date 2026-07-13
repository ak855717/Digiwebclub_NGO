import Hero from '../components/Hero'
import Approach from '../About/Approach'
import Empowerment from '../About/empowerment'
import AboutUs from '../home/AboutUs'
import OurStory from '../home/ourStory'
import Objective from '../About/objective'
import Faq from '../home/faq'
import Reviews from '../home/reviews'
import OurCauses from '../home/ourCauses'


const About = () => {
    return (
        <div>
            <Hero title='About Us' currentPage='About Us' />
            <AboutUs />
            <Approach />
            <Empowerment />
            <OurCauses />
            <OurStory />
            <Objective />
            <Reviews />
            <Faq />
        </div>
    )
}

export default About