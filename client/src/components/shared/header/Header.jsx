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
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = (props) => {

    const {
        destination,
        dateRange,
        dateRangeIsOpen,
        setDateRangeIsOpen,
        roomOptions,
        roomOptionsIsOpen,
        setRoomOptionsIsOpen,
        showFullHeader,
        setShowFullHeader,
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

    const toggleDropdowns = (source) => {
        switch (source) {
            case 'date':
                if (!dateRangeIsOpen && roomOptionsIsOpen) {
                    setRoomOptionsIsOpen(false)
                }
                setDateRangeIsOpen(prev => !prev)
                break;
            case 'options':
                if (!roomOptionsIsOpen && dateRangeIsOpen) {
                    setDateRangeIsOpen(false)
                }
                setRoomOptionsIsOpen(prev => !prev)
        }
    }

    const handleSearch = (e) => {
        navigate('/properties')
    }

    const headerWrapperClass = clsx('header-wrapper', {
        'small': !showFullHeader
    })

    const btnIsDisabled = (field) => {
        return field === 'children' ? roomOptions[field] <= 0 : roomOptions[field] <= 1
    }

    return(
        <div className="header-container">
            <div className={headerWrapperClass}>
                <div className="header-list">
                    <div className="list-item active">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Stays</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Flights</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Car Rentals</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faWandMagicSparkles} />
                        <span>Attractions</span>
                    </div>
                    <div className="list-item">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Airport Taxi</span>
                    </div>
                </div>
                {showFullHeader &&
                    <>
                        <h1 className="title">Find your next stay</h1>
                        <p className="description">Get rewarded for your travels - unlock instant savings of 10% or more with a free MangooBooking account</p>
                        <Link to='/login' className="link">Signin / Register</Link>
                    </>
                }
            </div>
            {showFullHeader &&
                <div
                    ref={headerSearchDiv}
                    className="header-search-bar"
                >
                    <div className="search-item">
                        <FontAwesomeIcon icon={faBed} className='icon'/>
                        <input
                            type="text"
                            placeholder='Where are you going?'
                            onChange={handleChangeDestination}
                        />
                    </div>
                    <div className="search-item">
                        <div
                            className='search-item-sub'
                            onClick={() => toggleDropdowns('date')}
                        >
                            <FontAwesomeIcon icon={faCalendarDays} className='icon'/>
                            <span className='search-text'>
                            {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} className='icon'/>
                        </span>
                        </div>
                        {dateRangeIsOpen &&
                            <DateRange
                                className='date-range-dropdown'
                                ranges={[dateRange]}
                                onChange={handleChangeDateRange}
                            />
                        }
                    </div>
                    <div className="search-item">
                        <div
                            className='search-item-sub'
                            onClick={() => toggleDropdowns('options')}
                        >
                            <FontAwesomeIcon icon={faUser} className='icon'/>
                            <span className='search-text'>
                                {roomOptions.adults} adults
                                    {' '}- {roomOptions.children} children
                                    {' '}- {roomOptions.rooms} rooms
                                    {' '}<FontAwesomeIcon icon={faCaretDown} className='icon'/>
                            </span>
                        </div>
                        {roomOptionsIsOpen &&
                            <div className="search-options">
                                <div className="option-item">
                                    <span>Adults</span>
                                    <div className="option-item-sub">
                                        <button
                                            name='adults-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-btn"
                                            disabled={btnIsDisabled('adults')}
                                        >-
                                        </button>
                                        <span>{roomOptions.adults}</span>
                                        <button
                                            name='adults-plus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Children</span>
                                    <div className="option-item-sub">
                                        <button
                                            name='children-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-btn"
                                            disabled={btnIsDisabled('children')}
                                        >-
                                        </button>
                                        <span>{roomOptions.children}</span>
                                        <button
                                            name='children-plus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                                <div className="option-item">
                                    <span>Rooms</span>
                                    <div className="option-item-sub">
                                        <button
                                            name='rooms-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-btn"
                                            disabled={btnIsDisabled('rooms')}
                                        >-
                                        </button>
                                        <span>{roomOptions.rooms}</span>
                                        <button
                                            name='rooms-plus'
                                            onClick={handleChangeRoomOptions}
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
                        className="search-btn">Search
                    </button>
                </div>
            }
        </div>
    )
}

export default Header
