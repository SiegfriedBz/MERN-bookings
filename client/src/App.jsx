import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Authenticate from './pages/authenticate/Authenticate'
import HotelsList from './pages/hotelsList/HotelsList'
import Hotel from './pages/hotel/Hotel'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import MailList from './components/mailList/MailList'
import Footer from './components/footer/Footer'

function App() {

  return (
      <Router>
          <Navbar />
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Authenticate />} />
              <Route path='/login' element={<Authenticate />} />
              <Route path='/hotels' element={<HotelsList />} />
              <Route path='/hotels/:id' element={<Hotel />} />
          </Routes>
          <MailList />
          <Footer />
      </Router>
  )
}

export default App;
