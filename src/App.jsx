
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import OurCSR from './pages/ourCSR'
import Upcoming from './pages/upComingEvent'
import Safety2024 from './pages/Safety2024'
import Environment from './pages/Environment'
import Safety2023 from './pages/Safety2023'
import Media from './pages/Media'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Career from './pages/Career'


function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourCSR" element={<OurCSR />} />
        <Route path="/upcoming" element={<Upcoming />} />
        <Route path="/safety2024" element={<Safety2024 />} />
        <Route path="/environment" element={<Environment />} />
        <Route path="/safety2023" element={<Safety2023 />} />
        <Route path="/media" element={<Media />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
