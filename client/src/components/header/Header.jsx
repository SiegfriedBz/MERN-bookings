import { useRef, useEffect } from 'react'
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
import './header.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = (props) => {

    const {
        destination,
        dateRange,
        dateRangeIsOpen, setDateRangeIsOpen,
        roomOptions,
        roomOptionsIsOpen, setRoomOptionsIsOpen,
        showFullHeader, setShowFullHeader,
        handleChangeDestination,
        handleChangeDateRange,
        handleChangeRoomOptions
    } = props

    const { pathname } = useLocation()
    const headerSearchDiv = useRef(null)
    const navigate = useNavigate()

    useEffect(() => {
        setShowFullHeader(pathname === '/')
    }, [pathname])

    useEffect(() => {
        const handleCloseDropdowns = (e) => {
            if(headerSearchDiv.current && !headerSearchDiv.current.contains(e.target)) {
                setDateRangeIsOpen(false)
                setRoomOptionsIsOpen(false)
            }
        }
        document.addEventListener('click', handleCloseDropdowns)
        return () => {
            document.removeEventListener('click', handleCloseDropdowns)
        }
    }, [headerSearchDiv])

    const handleSearch = (e) => {
        navigate('/hotels')
    }

    const headerContainerClass = clsx('header--container', {
        'small': !showFullHeader
    })

    const btnIsDisabled = (field) => {
        return field === 'children' ? roomOptions[field] <= 0 : roomOptions[field] <= 1
    }

    return(
        <div className="header">
            <div className={headerContainerClass}>
                <div className="header--list">
                    <div className="header--list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="header--list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="header--list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="header--list-item">
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        <span>Attractions</span>
                    </div>
                    <div className="header--list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {showFullHeader &&
                    <>
                        <h1 className="header--title">Find your next stay</h1>
                        <p className="header--description">Get rewarded for your travels - unlock instant savings of 10% or more with a free MangooBooking account</p>
                        <Link to='/login' className="header--link">Signin / Register</Link>
                    </>
                }
            </div>
            {showFullHeader &&
                <div
                    ref={headerSearchDiv}
                    className="header--search"
                >
                    <div className="header--search-item">
                        <FontAwesomeIcon icon={faBed} className='header--icon'/>
                        <input
                            className="header--search-input"
                            type="text"
                            placeholder='Where are you going?'
                            defaultValue={destination}
                            onChange={handleChangeDestination}
                        />
                    </div>
                    <div className="header--search-item">
                        <div
                            className='header--search-item-sub'
                            onClick={() => setDateRangeIsOpen((prev) => !prev)}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} className='header--icon'/>
                            <span className='header--search-text'>
                            {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} className='header--icon'/>
                        </span>
                        </div>
                        {dateRangeIsOpen &&
                            <DateRange
                                className='header--date-range'
                                ranges={[dateRange]}
                                onChange={handleChangeDateRange}
                            />
                        }
                    </div>
                    <div className="header--search-item">
                        <div
                            className='header--search-item-sub'
                            onClick={() => setRoomOptionsIsOpen(prev => !prev)}
                        >
                            <FontAwesomeIcon icon={faUser} className='header--icon'/>
                            <span className='header--search-text'>
                            {roomOptions.adults} adults
                                {' '}- {roomOptions.children} children
                                {' '}- {roomOptions.rooms} rooms
                                {' '}<FontAwesomeIcon icon={faCaretDown} className='header--icon'/>
                        </span>
                        </div>
                        {roomOptionsIsOpen &&
                            <div className="header--options">
                                <div className="header--option-item">
                                    <span className="header--option-text">Adults</span>
                                    <div className="header--option-item-sub">
                                        <button
                                            name='adults-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                            disabled={btnIsDisabled('adults')}
                                        >-
                                        </button>
                                        <span className="header--option-counter">
                                        {roomOptions.adults}
                                    </span>
                                        <button
                                            name='adults-plus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="header--option-item">
                                    <span className="header--option-text">Children</span>
                                    <div className="header--option-item-sub">
                                        <button
                                            name='children-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                            disabled={btnIsDisabled('children')}
                                        >-
                                        </button>
                                        <span className="header--option-counter">
                                            {roomOptions.children}
                                        </span>
                                        <button
                                            name='children-plus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="header--option-item">
                                    <span className="header--option-text">Rooms</span>
                                    <div className="header--option-item-sub">
                                        <button
                                            name='rooms-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                            disabled={btnIsDisabled('rooms')}
                                        >-
                                        </button>
                                        <span className="header--option-counter">
                                            {roomOptions.rooms}
                                        </span>
                                        <button
                                            name='rooms-plus'
                                            onClick={handleChangeRoomOptions}
                                            className="header--option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <button
                                    className="header--close-options-btn"
                                    onClick={() => setRoomOptionsIsOpen(prev => !prev)}
                                >Done
                                </button>
                            </div>
                        }
                    </div>
                    <button
                        onClick={handleSearch}
                        className="header--search-btn">Search</button>
                </div>
            }
        </div>
    )
}

export default Header
