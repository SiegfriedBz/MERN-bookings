import { useNavigate } from "react-router-dom";
import './hotelListCard.css'

const HotelListCard = ({ hotel }) => {
    const { id, name } = hotel

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/hotels/${id}`, { state: hotel })
    }

    return(
        <div className="hotel-list-card--container">
            <img
                className='hotel-list-card--img'
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt="hotel image"
            />
            <div className="hotel-list-card--body">
                <div className="hotel-list-card--top">
                    <span className='hotel-list-card--text-blue-bold'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='hotel-list-card--blue-pill'>8.9</span>
                </div>
                <div className="hotel-list-card--content">
                    <div className="hotel-list-card--content-left">
                        <span>500m from center</span>
                        <span className='hotel-list-card--green-pill'>free airport taxi</span>
                        <span className='hotel-list-card--text-bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='hotel-list-card--text-green-bold'>Free cancellation</span>
                    </div>
                    <div className="hotel-list-card--content-right">
                        <div className="hotel-list-card--price-wrapper">
                            <span className="hotel-list-card--price">$125</span>
                            <span className="hotel-list-card--text-grey">includes taxes and fees</span>
                        </div>
                        <button
                            onClick={handleNavToHotelPage}
                            className="hotel-list-card--btn"
                        >
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelListCard
