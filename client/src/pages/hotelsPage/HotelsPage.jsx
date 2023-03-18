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

const initSearchResults = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' }
]

const HotelsPage = (props) => {

    const {
        destination,
        dateRange,
        dateRangeIsOpen, setDateRangeIsOpen,
        roomOptions,
        handleChangeDestination,
        handleChangeDateRange,
        handleChangeRoomOptions
    } = props

    const [searchResults, setSearchResults] = useState(initSearchResults)

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
                                        value={roomOptions.minPrice}
                                        onChange={handleChangeRoomOptions}
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
                                        value={roomOptions.maxPrice}
                                        onChange={handleChangeRoomOptions}
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
                                            name='adults-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-search-btn"
                                            disabled={btnIsDisabled('adults')}
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.adults}
                                        </span>
                                        <button
                                            name='adults-plus'
                                            onClick={handleChangeRoomOptions}
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
                                            name='children-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-search-btn"
                                            disabled={btnIsDisabled('children')}
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.children}
                                        </span>
                                        <button
                                            name='children-plus'
                                            onClick={handleChangeRoomOptions}
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
                                            name='rooms-minus'
                                            onClick={handleChangeRoomOptions}
                                            className="option-search-btn"
                                            disabled={btnIsDisabled('rooms')}
                                        >-
                                        </button>
                                        <span className="option-search-counter">
                                            {roomOptions.rooms}
                                        </span>
                                        <button
                                            name='rooms-plus'
                                            onClick={handleChangeRoomOptions}
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
