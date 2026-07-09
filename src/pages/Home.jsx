import Hero from '../home/Hero'
import About from '../home/AboutUs'
import Service from '../home/ourService'
import WhyChoose from '../home/whyChoose'
import OurStory from '../home/ourStory'
import OurCauses from '../home/ourCauses'
import OurFeatures from '../home/ourFeatures'
import Upcoming from '../home/upcoming'
import Donation from '../home/donation'
import Faq from '../home/faq'
import Reviews from '../home/reviews'
import Sponsors from '../home/sponsors'

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Service />
      <Sponsors />
      <WhyChoose />
      <OurStory />
      <OurCauses />
      <OurFeatures />
      <Upcoming />
      <Donation />
      <Faq />
      <Reviews />
    </div>
  )
}

export default Home
