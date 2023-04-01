import { useState } from 'react'
import clsx from 'clsx'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import PropertyCard from '../../components/propertyCard/propertyCard'

const initSearchResults = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 3, name: 'C' },
    { id: 4, name: 'D' },
    { id: 5, name: 'E' }
]

const PropertiesPage = (props) => {
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

    const searchContainerClass = clsx('search-container', {
        'big-height': dateRangeIsOpen
    })

    return(
        <div className="properties-page">
            <div className='container'>
                <div className={searchContainerClass}>
                    <h3>Search</h3>
                    <form onSubmit={handleSubmit}>
                        <div id='destination' className="input-wrapper">
                            <span className="input-title">Destination</span>
                            <div className="input-container">
                                <input
                                    className='input-destination'
                                    type="text"
                                    placeholder='Where are you going?'
                                    defaultValue={destination}
                                    onChange={handleChangeDestination}
                                />
                            </div>
                        </div>
                        <div id='dates' className="input-wrapper">
                            <span className="input-title">Dates</span>
                            <div className="input-container dates"
                                 onClick={() => (
                                     setDateRangeIsOpen((prev) => !prev)
                                 )}
                            >
                                {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} />
                                {dateRangeIsOpen &&
                                    <DateRange
                                        className='input-date-dropdown'
                                        ranges={[dateRange]}
                                        onChange={handleChangeDateRange}
                                    />
                                }
                            </div>
                        </div>
                        <div id='options' className="input-wrapper">
                            <span className="input-title">Options</span>
                            <div className="input-container">
                                <div className='input-sub-container'>
                                    <span>MinPrice <small>per night</small></span>
                                    <input
                                        className='input-prices'
                                        type="number"
                                        name='minPrice'
                                        value={roomOptions.minPrice}
                                        onChange={handleChangeRoomOptions}
                                    />
                                </div>
                                <div className='input-sub-container'>
                                    <span>MaxPrice <small>per night</small></span>
                                    <input
                                        className='input-prices'
                                        type="number"
                                        name='maxPrice'
                                        value={roomOptions.maxPrice}
                                        onChange={handleChangeRoomOptions}
                                    />
                                </div>
                            </div>
                            <div className="input-container">
                                <div className="input-sub-container">
                                    <span>Adults</span>
                                    <div className="option-btn-wrapper">
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
                                <div className="input-sub-container">
                                    <span>Children</span>
                                    <div className="option-btn-wrapper">
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
                                <div className="input-sub-container">
                                    <span>Rooms</span>
                                    <div className="option-btn-wrapper">
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
                            </div>
                        </div>
                        <div className="search-btn-wrapper">
                            <button className="search-btn">Search</button>
                        </div>
                    </form>
                </div>
                <div>
                    {searchResults &&
                        searchResults.map(property => {
                            return (
                                <PropertyCard key={property.id} property={property} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PropertiesPage
