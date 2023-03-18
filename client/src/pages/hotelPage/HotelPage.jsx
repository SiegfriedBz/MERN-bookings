import { useLocation } from "react-router-dom";
import './hotelPage.css'

const initHotel = {
    name: '',
    city: ''
}

const HotelPage = () => {
    const location = useLocation()
    console.log(location.state)

    return(
        <div className='hotel--container'>

        </div>
    )
}

export default HotelPage
