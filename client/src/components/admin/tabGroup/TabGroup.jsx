import { useState } from 'react'
import clsx from 'clsx'
import Tab from '../tab/Tab'
import './tabGroup.css'
import usePropertyFetch from '../../../hooks/usePropertyFetch'
import {
    CREATE_PROPERTY,
    UPDATE_PROPERTY,
    DELETE_PROPERTY
} from '../../../reducers/propertyActionTypes'

const initPropertyState = {
    name: '',
    category: 'property',
    country: '',
    city: '',
    address: '',
    distance: '',
    photos: [],
    title: '',
    description: '',
    rating: 5,
    rooms: [],
    cheapestPrice: 50,
    featured: false
}

const TabGroup = () => {
    const { createProperty, updateProperty } = usePropertyFetch()
    const [property, setProperty] = useState(initPropertyState)

    const [activeTab, setActiveTab] = useState('Create Property')

    const handleChangeProperty = (e) => {
        const { name, value, type, checked,  } = e.target
        setProperty(prev => {
            return { ...prev, [name]: type === 'checkbox' ? checked : value }
        })
    }

    // console.log('property', property)

    const handleCreateProperty = async (e) => {
        e.preventDefault()
        await createProperty({
            method: "POST",
            body: property,
            dispatchType: CREATE_PROPERTY
        })
    }

    const handleUpdateProperty = async (e) => {
        e.preventDefault()
        await updateProperty({
            method: "POST",
            body: property,
            dispatchType: UPDATE_PROPERTY
        })
    }

    const PropertyForm = ({ handleSubmit, btnText }) => {
        return(
            <div className="tabGroup--property-form-wrapper">
                <form onSubmit={handleSubmit}
                      className="tabGroup--property-form">
                    <label
                        htmlFor='name'
                    >Property name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={handleChangeProperty}
                        value={property.name}
                        placeholder='Enter name...'
                    />
                    <div className="tabGroup--property-form-input-wrapper-col">
                        <label
                            htmlFor='category'
                        >Category</label>
                        <select
                            id='category'
                            name='category'
                            value={property.category}
                            onChange={handleChangeProperty}>
                            <option value="">Select a category</option>
                            <option value="Hotel">Hotel</option>
                            <option value="Apartment">Apartment</option>
                            <option value="Cabin">Cabin</option>
                            <option value="Resort">Resort</option>
                            <option value="Villa">Villa</option>
                        </select>
                    </div>
                    <label
                        htmlFor='country'
                    >Country
                    </label>
                    <input
                        type='text'
                        id='country'
                        name='country'
                        onChange={handleChangeProperty}
                        value={property.country}
                        placeholder='Enter country...'
                    />
                    <label
                        htmlFor='city'
                    >City
                    </label>
                    <input
                        type='text'
                        id='city'
                        name='city'
                        onChange={handleChangeProperty}
                        value={property.city}
                        placeholder='Enter city...'
                    />
                    <label
                        htmlFor='address'
                    >Address
                    </label>
                    <input
                        type='text'
                        id='address'
                        name='address'
                        onChange={handleChangeProperty}
                        value={property.address}
                        placeholder='Enter address...'
                    />
                    <label
                        htmlFor='distance'
                    >Distance
                    </label>
                    <input
                        type='text'
                        id='distance'
                        name='distance'
                        onChange={handleChangeProperty}
                        value={property.distance}
                        placeholder='Enter distance from center...'
                    />
                    <label
                        htmlFor='photos'
                    >Photos
                    </label>
                    <input
                        type='text'
                        id='photos'
                        name='photos'
                        onChange={handleChangeProperty}
                        value={property.photos}
                        placeholder='Enter photos url separated by commas...'
                    />
                    <label
                        htmlFor='title'
                    >Title
                    </label>
                    <input
                        type='text'
                        id='title'
                        name='title'
                        onChange={handleChangeProperty}
                        value={property.title}
                        placeholder='Enter a title...'
                    />
                    <div className="tabGroup--property-form-input-wrapper-col">
                        <label
                            htmlFor='description'
                        >Description
                        </label>
                        <textarea
                            type='text'
                            id='description'
                            name='description'
                            onChange={handleChangeProperty}
                            value={property.description}
                            placeholder='Enter a description...'
                        />
                    </div>
                    <label
                        htmlFor='rating'
                    >Rating
                    </label>
                    <input
                        type='number'
                        id='rating'
                        name='rating'
                        onChange={handleChangeProperty}
                        value={property.rating}
                        min='0'
                        max='5'
                        placeholder='Enter a rating...'
                    />
                    <label
                        htmlFor='rooms'
                    >Rooms
                    </label>
                    <input
                        type='text'
                        id='rooms'
                        name='rooms'
                        onChange={handleChangeProperty}
                        value={property.rooms}
                        placeholder='Enter rooms separated by commas...'
                    />
                    <label
                        htmlFor='cheapestPrice'
                    >Cheapest Price
                    </label>
                    <input
                        type='number'
                        id='cheapestPrice'
                        name='cheapestPrice'
                        onChange={handleChangeProperty}
                        value={property.cheapestPrice}
                        min='15'
                        placeholder='Enter cheapestPrice...'
                    />
                    <div className="tabGroup--property-form-input-wrapper-row">
                        <input
                            type='checkbox'
                            id='featured'
                            name='featured'
                            onChange={handleChangeProperty}
                            checked={property.featured}
                        />
                        <label
                            htmlFor='featured'
                        >Featured
                        </label>
                    </div>
                    <button
                        type='submit'
                        className='tabGroup--property-form-submit-btn'
                    >{btnText}</button>
                </form>
            </div>
        )
    }

    const createPropertyContent = (
        <PropertyForm handleSubmit={handleCreateProperty} btnText='Create' />
)

    const updatePropertyContent = (
        <PropertyForm handleSubmit={handleUpdateProperty} btnText='Update' />
    )

    const createUserContent = (
        <>
            createUserContent
        </>
    )

    const updateUserContent = (
        <>
            updateUserContent
        </>
    )

    const tabList = [
        { tabName: 'Create Property', tabContent: createPropertyContent },
        { tabName: 'Update Property', tabContent: updatePropertyContent },
        { tabName: 'Create User', tabContent: createUserContent },
        { tabName: 'Update User', tabContent: updateUserContent },
    ]

    return(
        <div className='tabGroup--container'>
            <div className="tabGroup--btn-tab-group">
                {tabList &&
                    tabList.map(tab => {
                        const { tabName } = tab
                        const btnTabClass = clsx('tabGroup--btn-tab', {
                            'active': activeTab === tabName
                        })
                        return(
                            <button
                                className={btnTabClass}
                                key={tabName}
                                onClick={() => setActiveTab(tabName)}
                            >{tabName}
                            </button>
                        )
                    })
                }
            </div>
            {tabList &&
                tabList.map((tab) => {
                    const { tabName, tabContent } = tab
                    return  (
                        <Tab
                            key={tabName}
                            tabName={tabName}
                            activeTab={activeTab}
                        >
                            { tabContent }
                        </Tab>
                    )
                })
            }
        </div>
    )
}

export default TabGroup
