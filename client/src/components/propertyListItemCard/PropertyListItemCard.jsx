import { useNavigate } from "react-router-dom";
import './propertyListItemCard.css'

const PropertyListItemCard = ({ property }) => {
    const { id, name } = property

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/properties/${id}`, { state: property })
    }

    return(
        <div className="property-list-card--container">
            <img
                className='property-list-card--img'
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt="property image"
            />
            <div className="property-list-card--body">
                <div className="property-list-card--top">
                    <span className='property-list-card--text-blue-bold'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='property-list-card--blue-pill'>8.9</span>
                </div>
                <div className="property-list-card--content">
                    <div className="property-list-card--content-left">
                        <span>500m from center</span>
                        <span className='property-list-card--green-pill'>free airport taxi</span>
                        <span className='property-list-card--text-bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='property-list-card--text-green-bold'>Free cancellation</span>
                    </div>
                    <div className="property-list-card--content-right">
                        <div className="property-list-card--price-wrapper">
                            <span className="property-list-card--price">$125</span>
                            <span className="property-list-card--text-grey">includes taxes and fees</span>
                        </div>
                        <button
                            onClick={handleNavToHotelPage}
                            className="property-list-card--btn"
                        >
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyListItemCard
