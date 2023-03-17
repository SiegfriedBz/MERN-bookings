import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import MailList from './components/mailList/MailList'
import Home from './pages/homePage/HomePage'
import AuthPage from './pages/authPage/AuthPage'
import HotelsPage from './pages/hotelsPage/HotelsPage'
import HotelPage from './pages/hotelPage/HotelPage'

const SERVER_URL = {
    'mailingList': '/mailinglist'
}

function App() {

    const onUserAuth = async () => {
        console.log('onUserRegisterOrLogin')
    }

    const onUserMailListSubscribe = async (userEmail) => {
        console.log('onUserMailListSubscribe')
        // const response = await fetch(SERVER_URL['mailingList'], {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(userEmail)
        // })
        // const data = await response.json()
        // console.log('onMailingListSubscribe data', data)
    }

  return (
      <Router>
          <Navbar />
          <Header />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={
                  <AuthPage
                      onUserAuth={onUserAuth}
                  />} />
              <Route path='/login' element={
                  <AuthPage
                      onUserAuth={onUserAuth}
                  />} />
              <Route path='/hotels' element={<HotelsPage />} />
              <Route path='/hotels/:id' element={<HotelPage />} />
          </Routes>
          <MailList onUserMailListSubscribe={onUserMailListSubscribe}/>
          <Footer />
      </Router>
  )
}

export default App;
