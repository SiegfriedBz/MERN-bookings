import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import usePropertyFetch from './hooks/usePropertyFetch'
import Navbar from "./components/shared/navbar/Navbar"
import Header from "./components/shared/header/Header"
import Footer from './components/shared/footer/Footer'
import MailList from './components/shared/mailList/MailList'
import Home from './pages/homePage/HomePage'
import AuthPage from './pages/authPage/AuthPage'
import PropertiesPage from './pages/propertiesPage/PropertiesPage'
import PropertyPage from './pages/propertyPage/PropertyPage'
import AdminPage from './pages/adminPage/AdminPage'
// import ErrorPage from './pages/errorPage/ErrorPage'

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

    const { properties, isLoading, error } = usePropertyFetch()

    const [destination, setDestination] = useState(initDestination)
    const [dateRange, setDateRange] = useState(initDateRange)
    const [dateRangeIsOpen, setDateRangeIsOpen] = useState(false)
    const [roomOptions, setRoomOptions] = useState(initRoomOptions)
    const [roomOptionsIsOpen, setRoomOptionsIsOpen] = useState(false)
    const [showFullHeader, setShowFullHeader] = useState(true)

    const [userIsAdmin, setUserIsAdmin] = useState(true)

    const onUserAuth = async () => {
        console.log('onUserRegisterOrLogin')
        // if user.isAdmin => setUserIsAdmin(true) redirect('/admin')
        // else redirect('/')
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
              dateRangeIsOpen={dateRangeIsOpen}
              setDateRangeIsOpen={setDateRangeIsOpen}
              roomOptions={roomOptions}
              roomOptionsIsOpen={roomOptionsIsOpen}
              setRoomOptionsIsOpen={setRoomOptionsIsOpen}
              showFullHeader={showFullHeader}
              setShowFullHeader={setShowFullHeader}
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
              <Route path='/admin' element={
                  // userIsAdmin
                  true
                  ?
                    <AdminPage
                      onUserAuth={onUserAuth}
                    />
                  : <Navigate to='/' />
              } />
              <Route path='/properties' element={
                  <PropertiesPage
                      destination={destination}
                      dateRange={dateRange}
                      dateRangeIsOpen={dateRangeIsOpen}
                      setDateRangeIsOpen={setDateRangeIsOpen}
                      roomOptions={roomOptions}
                      handleChangeDestination={handleChangeDestination}
                      handleChangeDateRange={handleChangeDateRange}
                      handleChangeRoomOptions={handleChangeRoomOptions}
                  />
              } />
              <Route path='/properties/:id' element={<PropertyPage />} />
          </Routes>
          <MailList onUserMailListSubscribe={onUserMailListSubscribe} />
          <Footer />
      </Router>
  )
}

export default App;
