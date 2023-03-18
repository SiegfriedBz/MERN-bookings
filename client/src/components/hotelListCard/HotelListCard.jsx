import { useNavigate } from "react-router-dom";
import './hotelListCard.css'

const HotelListCard = ({ hotel }) => {
    const { id, name } = hotel

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/hotels/${id}`, { state: hotel })
    }

    return(
        <div className="hotel-list-card">
            <img
                className='hotel-list-card--img'
                src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
            />
            <div className="hotel-list-card--body">
                <div className="hotel-list-card--body-top">
                    <span className='title'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='blue-pill'>8.9</span>
                </div>
                <div className="hotel-list-card--body-content">
                    <div className="hotel-list-card--body-content-left">
                        <span>500m from center</span>
                        <span className='green-pill'>free airport taxi</span>
                        <span className='bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='green-text'>Free cancellation</span>
                    </div>
                    <div className="hotel-list-card--body-content-right">
                        <div className="price-wrapper">
                            <span className="price">$125</span>
                            <span className="grey">includes taxes and fees</span>
                        </div>
                        <button
                            onClick={handleNavToHotelPage}
                            className="hotel-list-card--body-btn"
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
