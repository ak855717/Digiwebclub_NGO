
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import OurCSR from './pages/ourCSR'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ourCSR" element={<OurCSR />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
