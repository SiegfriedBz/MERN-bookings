import { useState, useRef, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faBed,
    faPlane,
    faTaxi,
    faWandMagicSparkles,
    faCalendarDays,
    faUser,
    faCaretDown
} from '@fortawesome/free-solid-svg-icons'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import './header.css'

const initDestination = 'Paros Greece'

const initDateRange = {
    startDate: new Date(),
    endDate: new Date(Date.now() + (3600 * 1000 * 24)),
    key: 'selection'
}

const initRoomOptions = {
    adults: 1,
    children: 0,
    rooms: 1
}

const Header = () => {
    const [destination, setDestination] = useState(initDestination)
    const [dateRange, setDateRange] = useState(initDateRange)
    const [dateRangeIsOpen, setDateRangeIsOpen] = useState(false)
    const [roomOptions, setRoomOptions] = useState(initRoomOptions)
    const [roomOptionsIsOpen, setRoomOptionsIsOpen] = useState(false)
    const [showFullHeader, setShowFullHeader] = useState(true)

    const { pathname } = useLocation()
    const headerSearch = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        setShowFullHeader(pathname === '/')
    }, [pathname])

    useEffect(() => {
        const handleCloseDropdowns = (e) => {
            if(headerSearch.current && !headerSearch.current.contains(e.target)) {
                setDateRangeIsOpen(false)
                setRoomOptionsIsOpen(false)
            }
        }
        document.addEventListener('click', handleCloseDropdowns)
        return () => {
            document.removeEventListener('click', handleCloseDropdowns)
        }
    }, [headerSearch])

    const handleChangeDestination = (e) => {
        setDestination(e.target.value)
    }

    const handleChangeDateRange = (e) => {
        setDateRange({...dateRange, ...e.selection})
    }

    const handleChangeOptions = (field, change) => {
        setRoomOptions(prev => {
            return {
                ...prev,
                [field]: change === '+' ? prev[field] +1 : prev[field] -1
            }
        })
    }

    const handleSearch = (e) => {
        navigate('/hotels', {
            state: {
                headerDestination: destination,
                headerDateRange: dateRange,
                headerRoomOptions: roomOptions
            }}
        )
    }

    const headerContainerClass = clsx('header-container', {
        'small': !showFullHeader
    })

    const btnIsDisabled = (field) => {
        return field === 'children' ? roomOptions[field] <= 0 : roomOptions[field] <= 1
    }

    return(
        <div className="header">
            <div className={headerContainerClass}>
                <div className="header-list">
                    <div className="header-list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        <span>Attractions</span>
                    </div>
                    <div className="header-list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {showFullHeader &&
                    <>
                        <h1 className="header-title">Find your next stay</h1>
                        <p className="header-description">Get rewarded for your travels - unlock instant savings of 10% or more with a free MangooBooking account</p>
                        <Link to='/login' className="header-link">Signin / Register</Link>
                    </>
                }
            </div>
            {showFullHeader &&
                <div
                    ref={headerSearch}
                    className="header-search"
                >
                    <div className="header-search-item">
                        <FontAwesomeIcon icon={faBed} className='header-icon'/>
                        <input
                            className="header-search-input"
                            type="text"
                            placeholder='Where are you going?'
                            defaultValue={destination}
                            onChange={handleChangeDestination}
                        />
                    </div>
                    <div className="header-search-item">
                        <div
                            className='header-search-item-sub'
                            onClick={() => setDateRangeIsOpen((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} className='header-icon'/>
                            <span className='header-search-text'>
                            {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} className='header-icon'/>
                        </span>
                        </div>
                        {dateRangeIsOpen &&
                            <DateRange
                                className='date-range'
                                ranges={[dateRange]}
                                onChange={handleChangeDateRange}
                            />
                        }
                    </div>
                    <div className="header-search-item">
                        <div
                            className='header-search-item-sub'
                            onClick={() => setRoomOptionsIsOpen(prev => !prev)}
                        >
                            <FontAwesomeIcon icon={faUser} className='header-icon'/>
                            <span className='header-search-text'>
                            {roomOptions.adults} adults
                                {' '}- {roomOptions.children} children
                                {' '}- {roomOptions.rooms} rooms
                                {' '}<FontAwesomeIcon icon={faCaretDown} className='header-icon'/>
                        </span>
                        </div>
                        {roomOptionsIsOpen &&
                            <div className="options">
                                <div className="option-item">
                                    <span className="option-text">Adults</span>
                                    <div className="option-item-sub">
                                        <button
                                            disabled={btnIsDisabled('adults')}
                                            onClick={() => handleChangeOptions('adults', '-')}
                                            className="option-btn"
                                        >-
                                        </button>
                                        <span className="option-counter">
                                        {roomOptions.adults}
                                    </span>
                                        <button
                                            onClick={() => handleChangeOptions('adults', '+')}
                                            className="option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Children</span>
                                    <div className="option-item-sub">
                                        <button
                                            disabled={btnIsDisabled('children')}
                                            onClick={() => handleChangeOptions('children', '-')}
                                            className="option-btn"
                                        >-
                                        </button>
                                        <span className="option-counter">
                                            {roomOptions.children}
                                        </span>
                                        <button
                                            onClick={() => handleChangeOptions('children', '+')}
                                            className="option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span className="option-text">Rooms</span>
                                    <div className="option-item-sub">
                                        <button
                                            disabled={btnIsDisabled('rooms')}
                                            onClick={() => handleChangeOptions('rooms', '-')}
                                            className="option-btn"
                                        >-
                                        </button>
                                        <span className="option-counter">
                                            {roomOptions.rooms}
                                        </span>
                                        <button
                                            onClick={() => handleChangeOptions('rooms', '+')}
                                            className="option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="close-options-btn"
                                    onClick={() => setRoomOptionsIsOpen(prev => !prev)}
                                >Done
                                </button>
                            </div>
                        }
                    </div>
                    <button
                        onClick={handleSearch}
                        className="header-search-btn">Search</button>
                </div>
            }
        </div>
    )
}

export default Header
