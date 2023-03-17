import './hotelsPage.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Hotel from '../../components/hotel/Hotel'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import clsx from 'clsx'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

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

const initPriceRange = { minPrice: '', maxPrice: '' }

const initSearchResults = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
]

const HotelsPage = () => {

    const location = useLocation()
    const { headerDestination, headerDateRange, headerRoomOptions } = location.state

    const [destination, setDestination] = useState(headerDestination || initDestination)
    const [dateRange, setDateRange] = useState(headerDateRange || initDateRange)
    const [dateRangeIsOpen, setDateRangeIsOpen] = useState(false)
    const [roomOptions, setRoomOptions] = useState(headerRoomOptions || initRoomOptions)
    const [priceRange, setPriceRange] = useState(initPriceRange)
    const [searchResults, setSearchResults] = useState(initSearchResults)

    // useEffect(() => {
    //
    // }, [])

    const handleChangeDestination = (e) => {
        setDestination(e.target.value)
    }

    const handleChangeDateRange = (e) => {
        setDateRange({...dateRange, ...e.selection})
    }

    const handleChangeRoomOptions = (field, change) => {
        setRoomOptions(prev => {
            return { ...prev, [field]: change === '+' ? prev[field] +1 : prev[field] -1 }
        })
    }

    const handleChangePriceRange = (e) => {
        const { name, value } = e.target
        setPriceRange(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

    }

    const btnIsDisabled = (field) => {
        return field === 'children' ? roomOptions[field] <= 0 : roomOptions[field] <= 1
    }

    const hotelsSearchContainerClass = clsx('hotels-search-container', {
        'big-height': dateRangeIsOpen
    })


    return(
        <div className='hotels-wrapper'>
            <div className='hotels-container'>

                <div className={hotelsSearchContainerClass}>
                    <h3>Search</h3>
                    <form
                        onSubmit={handleSubmit}
                        className="hotels-search-form"
                    >
                        <div
                            id='destination'
                            className="hotels-input-container"
                        >
                            <span className="input-title">
                                Destination
                            </span>
                            <div className="input-container destination">
                                <input
                                    className='destination'
                                    type="text"
                                    placeholder='Where are you going?'
                                    defaultValue={destination}
                                    onChange={handleChangeDestination}
                                />
                            </div>
                        </div>

                        <div
                            id='dates'
                            className="hotels-input-container"
                        >
                            <span className="input-title">
                                Dates
                            </span>
                            <div className="input-container dates"
                                    // className='dates-range-container'
                                    onClick={() => (
                                        setDateRangeIsOpen((prev) => !prev)
                                    )}
                                >
                                    {format(dateRange.startDate, 'MM/dd/yyyy')}
                                    {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                    {' '}<FontAwesomeIcon icon={faCaretDown} className='icon'/>
                                    {dateRangeIsOpen &&
                                        <DateRange
                                            className='date-range'
                                            ranges={[dateRange]}
                                            onChange={handleChangeDateRange}
                                        />
                                    }
                            </div>
                        </div>

                        <div
                            id='options'
                            className="hotels-input-container"
                        >
                            <span className="input-title">
                                Options
                            </span>

                            <div className="input-container prices">
                                <div className='input-sub-container'>
                                    <span className="input-subtitle">
                                        MinPrice
                                    </span>
                                    <input
                                        className='prices'
                                        type="number"
                                        name='minPrice'
                                        value={priceRange.minPrice}
                                        onChange={handleChangePriceRange}
                                    />
                                </div>
                                <div className='input-sub-container'>
                                    <span className="input-subtitle">
                                        MaxPrice
                                    </span>
                                    <input
                                        className='prices'
                                        type="number"
                                        name='maxPrice'
                                        value={priceRange.maxPrice}
                                        onChange={handleChangePriceRange}
                                    />
                                </div>
                            </div>

                            <div className="input-container room-options">
                                <div className="input-sub-container">
                                    <span className="input-subtitle">
                                        Adults
                                    </span>
                                    <div className="option-search-btn-wrapper">
                                        <button
                                            disabled={btnIsDisabled('adults')}
                                            onClick={() => handleChangeRoomOptions('adults', '-')}
                                            className="option-search-btn"
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.adults}
                                        </span>
                                        <button
                                            onClick={() => handleChangeRoomOptions('adults', '+')}
                                            className="option-search-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>

                                <div className="input-sub-container">
                                    <span className="input-subtitle">
                                        Children
                                    </span>
                                    <div className="option-search-btn-wrapper">
                                        <button
                                            disabled={btnIsDisabled('children')}
                                            onClick={() => handleChangeRoomOptions('children', '-')}
                                            className="option-search-btn"
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.children}
                                        </span>
                                        <button
                                            onClick={() => handleChangeRoomOptions('children', '+')}
                                            className="option-search-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>

                                <div className="input-sub-container">
                                    <span className="input-subtitle">
                                        Rooms
                                    </span>
                                    <div className="option-search-btn-wrapper">
                                        <button
                                            disabled={btnIsDisabled('rooms')}
                                            onClick={() => handleChangeRoomOptions('rooms', '-')}
                                            className="option-search-btn"
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.rooms}
                                        </span>
                                        <button
                                            onClick={() => handleChangeRoomOptions('rooms', '+')}
                                            className="option-search-btn"
                                        >+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hotels-search-btn-wrapper">
                            <button className="hotels-search-btn">
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <div className="hotels-results-container">
                    <h3>Your Hotels</h3>
                    {searchResults &&
                        searchResults.map(hotel => {
                            return (
                                <Hotel key={hotel.id} hotel={hotel} />
                            )
                        })
                    }
                </div>
            </div>
         </div>
    )
}

export default HotelsPage
