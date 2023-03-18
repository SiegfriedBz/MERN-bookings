import { useState } from 'react'
import HotelListCard from '../../components/hotelListCard/HotelListCard'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import clsx from 'clsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import './hotelsPage.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const initSearchResults = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' }
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

    const hotelsSearchContainerClass = clsx('hotels--search-container', {
        'big-height': dateRangeIsOpen
    })


    return(
        <div className='hotels--container'>

            <div className={hotelsSearchContainerClass}>
                <h3 className='hotels--search-title'>Search</h3>
                <form
                    onSubmit={handleSubmit}
                    className="hotels--search-form"
                >
                    <div
                        id='destination'
                        className="hotels--input-wrapper"
                    >
                        <span className="hotels--input-title">
                            Destination
                        </span>
                        <div className="hotels--input-container">
                            <input
                                className='hotels--destination'
                                type="text"
                                placeholder='Where are you going?'
                                defaultValue={destination}
                                onChange={handleChangeDestination}
                            />
                        </div>
                    </div>

                    <div
                        id='dates'
                        className="hotels--input-wrapper"
                    >
                        <span className="hotels--input-title">
                            Dates
                        </span>
                        <div className="hotels--input-container dates"
                                onClick={() => (
                                    setDateRangeIsOpen((prev) => !prev)
                                )}
                            >
                                {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} />
                                {dateRangeIsOpen &&
                                    <DateRange
                                        className='hotels--input-date-dropdown'
                                        ranges={[dateRange]}
                                        onChange={handleChangeDateRange}
                                    />
                                }
                        </div>
                    </div>

                    <div
                        id='options'
                        className="hotels--input-wrapper"
                    >
                        <span className="hotels--input-title">
                            Options
                        </span>

                        <div className="hotels--input-container">
                            <div className='hotels--input-option-sub-container'>
                                <span className="hotels--input-subtitle">
                                    MinPrice <small>per night</small>
                                </span>
                                <input
                                    className='hotels--prices'
                                    type="number"
                                    name='minPrice'
                                    value={roomOptions.minPrice}
                                    onChange={handleChangeRoomOptions}
                                />
                            </div>
                            <div className='hotels--input-option-sub-container'>
                                <span className="hotels--input-subtitle">
                                    MaxPrice <small>per night</small>
                                </span>
                                <input
                                    className='hotels--prices'
                                    type="number"
                                    name='maxPrice'
                                    value={roomOptions.maxPrice}
                                    onChange={handleChangeRoomOptions}
                                />
                            </div>
                        </div>

                        <div className="hotels--input-container">
                            <div className="hotels--input-option-sub-container">
                                <span className="hotels--input-subtitle">
                                    Adults
                                </span>
                                <div className="hotels--option-btn-wrapper">
                                    <button
                                        name='adults-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                        disabled={btnIsDisabled('adults')}
                                    >-
                                    </button>
                                    <span>{roomOptions.adults}</span>
                                    <button
                                        name='adults-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>

                            <div className="hotels--input-option-sub-container">
                                <span className="hotels--input-subtitle">
                                    Children
                                </span>
                                <div className="hotels--option-btn-wrapper">
                                    <button
                                        name='children-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                        disabled={btnIsDisabled('children')}
                                    >-
                                    </button>
                                    <span>{roomOptions.children}</span>
                                    <button
                                        name='children-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>

                            <div className="hotels--input-option-sub-container">
                                <span className="hotels--input-subtitle">
                                    Rooms
                                </span>
                                <div className="hotels--option-btn-wrapper">
                                    <button
                                        name='rooms-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                        disabled={btnIsDisabled('rooms')}
                                    >-
                                    </button>
                                    <span>{roomOptions.rooms}</span>
                                    <button
                                        name='rooms-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="hotels--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hotels--search-btn-wrapper">
                        <button className="hotels--search-btn">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div>
                {searchResults &&
                    searchResults.map(hotel => {
                        return (
                            <HotelListCard key={hotel.id} hotel={hotel} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default HotelsPage
