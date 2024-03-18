import './App.module.css'
import Navbar from './components/Navbar'
// import SocialMedia from './components/SocialMedia'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        {/* <SocialMedia /> */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  )
}

export default App
