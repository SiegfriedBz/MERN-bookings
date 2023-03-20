import { useState } from 'react'
import PropertyListItemCard from '../../components/propertyListItemCard/PropertyListItemCard'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range'
import clsx from 'clsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import './propertiesPage.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

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

    const propertysSearchContainerClass = clsx('properties--search-container', {
        'big-height': dateRangeIsOpen
    })


    return(
        <div className='properties--container'>

            <div className={propertysSearchContainerClass}>
                <h3 className='properties--search-title'>Search</h3>
                <form
                    onSubmit={handleSubmit}
                    className="properties--search-form"
                >
                    <div
                        id='destination'
                        className="properties--input-wrapper"
                    >
                        <span className="properties--input-title">
                            Destination
                        </span>
                        <div className="properties--input-container">
                            <input
                                className='properties--destination'
                                type="text"
                                placeholder='Where are you going?'
                                defaultValue={destination}
                                onChange={handleChangeDestination}
                            />
                        </div>
                    </div>

                    <div
                        id='dates'
                        className="properties--input-wrapper"
                    >
                        <span className="properties--input-title">
                            Dates
                        </span>
                        <div className="properties--input-container dates"
                                onClick={() => (
                                    setDateRangeIsOpen((prev) => !prev)
                                )}
                            >
                                {format(dateRange.startDate, 'MM/dd/yyyy')}
                                {' '}to {format(dateRange.endDate, 'MM/dd/yyyy')}
                                {' '}<FontAwesomeIcon icon={faCaretDown} />
                                {dateRangeIsOpen &&
                                    <DateRange
                                        className='properties--input-date-dropdown'
                                        ranges={[dateRange]}
                                        onChange={handleChangeDateRange}
                                    />
                                }
                        </div>
                    </div>

                    <div
                        id='options'
                        className="properties--input-wrapper"
                    >
                        <span className="properties--input-title">
                            Options
                        </span>

                        <div className="properties--input-container">
                            <div className='properties--input-option-sub-container'>
                                <span className="properties--input-subtitle">
                                    MinPrice <small>per night</small>
                                </span>
                                <input
                                    className='properties--prices'
                                    type="number"
                                    name='minPrice'
                                    value={roomOptions.minPrice}
                                    onChange={handleChangeRoomOptions}
                                />
                            </div>
                            <div className='properties--input-option-sub-container'>
                                <span className="properties--input-subtitle">
                                    MaxPrice <small>per night</small>
                                </span>
                                <input
                                    className='properties--prices'
                                    type="number"
                                    name='maxPrice'
                                    value={roomOptions.maxPrice}
                                    onChange={handleChangeRoomOptions}
                                />
                            </div>
                        </div>

                        <div className="properties--input-container">
                            <div className="properties--input-option-sub-container">
                                <span className="properties--input-subtitle">
                                    Adults
                                </span>
                                <div className="properties--option-btn-wrapper">
                                    <button
                                        name='adults-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                        disabled={btnIsDisabled('adults')}
                                    >-
                                    </button>
                                    <span>{roomOptions.adults}</span>
                                    <button
                                        name='adults-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>

                            <div className="properties--input-option-sub-container">
                                <span className="properties--input-subtitle">
                                    Children
                                </span>
                                <div className="properties--option-btn-wrapper">
                                    <button
                                        name='children-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                        disabled={btnIsDisabled('children')}
                                    >-
                                    </button>
                                    <span>{roomOptions.children}</span>
                                    <button
                                        name='children-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>

                            <div className="properties--input-option-sub-container">
                                <span className="properties--input-subtitle">
                                    Rooms
                                </span>
                                <div className="properties--option-btn-wrapper">
                                    <button
                                        name='rooms-minus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                        disabled={btnIsDisabled('rooms')}
                                    >-
                                    </button>
                                    <span>{roomOptions.rooms}</span>
                                    <button
                                        name='rooms-plus'
                                        onClick={handleChangeRoomOptions}
                                        className="properties--option-btn"
                                    >+
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="properties--search-btn-wrapper">
                        <button className="properties--search-btn">
                            Search
                        </button>
                    </div>
                </form>
            </div>

            <div>
                {searchResults &&
                    searchResults.map(property => {
                        return (
                            <PropertyListItemCard key={property.id} property={property} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PropertiesPage
