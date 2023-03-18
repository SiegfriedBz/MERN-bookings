import { useState } from 'react'
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
const initDestination = 'Paros Greece'

const initDateRange = {
    startDate: new Date(),
    endDate: new Date(Date.now() + (3600 * 1000 * 24)),
    key: 'selection'
}

const initRoomOptions = {
    minPrice: 25,
    maxPrice: 125,
    adults: 1,
    children: 0,
    rooms: 1
}

function App() {
    const [destination, setDestination] = useState(initDestination)
    const [dateRange, setDateRange] = useState(initDateRange)
    const [dateRangeIsOpen, setDateRangeIsOpen] = useState(false)
    const [roomOptions, setRoomOptions] = useState(initRoomOptions)
    const [roomOptionsIsOpen, setRoomOptionsIsOpen] = useState(false)
    const [showFullHeader, setShowFullHeader] = useState(true)

    const onUserAuth = async () => {
        console.log('onUserRegisterOrLogin')
    }

    const handleChangeDestination = (e) => {
        setDestination(e.target.value)
    }

    const handleChangeDateRange = (e) => {
        const selection = e.selection
        setDateRange({...dateRange, ...selection})
    }

    const handleChangeRoomOptions= (e) => {
        const { name, value } = e.target
        const [ field, changeSign ] = name.split('-')
        setRoomOptions(prev => {
            return {
                ...prev,
                [field]:
                    changeSign
                    ? changeSign === 'plus' ? prev[field] +1 : prev[field] -1
                    : value
            }
        })
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
          <Header
              destination={destination}
              dateRange={dateRange}
              dateRangeIsOpen={dateRangeIsOpen} setDateRangeIsOpen={setDateRangeIsOpen}
              roomOptions={roomOptions}
              roomOptionsIsOpen={roomOptionsIsOpen} setRoomOptionsIsOpen={setRoomOptionsIsOpen}
              showFullHeader={showFullHeader} setShowFullHeader={setShowFullHeader}
              handleChangeDestination={handleChangeDestination}
              handleChangeDateRange={handleChangeDateRange}
              handleChangeRoomOptions={handleChangeRoomOptions}
          />
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
              <Route path='/hotels' element={
                  <HotelsPage
                      destination={destination}
                      dateRange={dateRange}
                      dateRangeIsOpen={dateRangeIsOpen} setDateRangeIsOpen={setDateRangeIsOpen}
                      roomOptions={roomOptions}
                      handleChangeDestination={handleChangeDestination}
                      handleChangeDateRange={handleChangeDateRange}
                      handleChangeRoomOptions={handleChangeRoomOptions}
                  />} />
              <Route path='/hotels/:id' element={<HotelPage />} />
          </Routes>
          <MailList onUserMailListSubscribe={onUserMailListSubscribe}/>
          <Footer />
      </Router>
  )
}

export default App;
