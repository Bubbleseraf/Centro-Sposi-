import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import RouteScroll from './components/RouteScroll.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'

function App() {
  return (
    <div className="site-shell">
      <RouteScroll />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chi-siamo" element={<About />} />
          <Route path="/contatti" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
