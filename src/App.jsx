import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './lightbox.css'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Page404 from './Pages/Page404'
import Privacy from './Pages/Privacy'
import Terms from './Pages/Terms'
import Gallery from './Pages/Gallery'


function App() {

  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/privacy-policy' element={<Privacy />} />
          <Route path='/terms-conditions' element={<Terms />} />

          <Route path='*' element={<Page404 />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
