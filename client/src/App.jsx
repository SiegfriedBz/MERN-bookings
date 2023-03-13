import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import HotelsList from './pages/hotelsList/HotelsList'
import Hotel from './pages/hotel/Hotel'
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";

function App() {

  return (
      <Router>
          <Navbar />
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/hotels' element={<HotelsList />} />
              <Route path='/hotels/:id' element={<Hotel />} />
          </Routes>
      </Router>
  )
}

export default App;
