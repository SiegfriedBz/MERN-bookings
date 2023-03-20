import { useState } from 'react'
import AdminInput from './AdminInput'

const initHotelState = {
    name: '',
    category: '',
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

const hotelShape = {
    name: '',
    category: '',
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

const AdminPage = () => {

    const [hotel, setHotel] = useState(initHotelState)

    const handleChangeHotel = (e) => {
        const { name, value } = e.target
        setHotel(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleCreateHotel = async () => {
        console.log('handleCreateHotel')
    }

    return(
        <div className='admin--container'>
            <div className="admin--wrapper">
                <div className="admin--create-hotel-wrapper">
                    Create Hotel
                    <form className="admin--create-hotel-form">
                        {hotel &&
                            Object.keys(hotel).map((k, index) => {
                                return(
                                    <AdminInput
                                        key={index}
                                        field={k}
                                        // type={type}
                                        name={k}
                                        handleChangeHotel={handleChangeHotel}
                                    />
                                )
                            })
                        }
                        <button>Create</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AdminPage

