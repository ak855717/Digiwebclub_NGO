
import { Routes, Route } from 'react-router-dom'
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


function App() {
  return (
    <div>
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
