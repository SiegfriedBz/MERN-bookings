import { useNavigate } from "react-router-dom";
import './propertyCard.css'

const PropertyCard = ({ property }) => {
    const { id, name } = property

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/properties/${id}`, { state: property })
    }

    return(
        <div className="pc--container">
            <img
                className='pc--img'
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt="property image"
            />
            <div className="pc--body">
                <div className="pc--top">
                    <span className='pc--text-blue-bold'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='pc--blue-pill'>8.9</span>
                </div>
                <div className="pc--content">
                    <div className="pc--content-left">
                        <span>500m from center</span>
                        <span className='pc--green-pill'>free airport taxi</span>
                        <span className='pc--text-bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='pc--text-green-bold'>Free cancellation</span>
                    </div>
                    <div className="pc--content-right">
                        <div className="pc--price-wrapper">
                            <span className="pc--price">$125</span>
                            <span className="pc--text-grey">includes taxes and fees</span>
                        </div>
                        <button
                            onClick={handleNavToHotelPage}
                            className="pc--btn"
                        >
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyCard
