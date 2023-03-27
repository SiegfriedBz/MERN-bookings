import { useNavigate } from "react-router-dom";
import './propertiesPagePropertyCard.css'

const PropertiesPagePropertyCard = ({ property }) => {
    const { id, name } = property

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/properties/${id}`, { state: property })
    }

    return(
        <div className="pppc--container">
            <img
                className='pppc--img'
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt="property image"
            />
            <div className="pppc--body">
                <div className="pppc--top">
                    <span className='pppc--text-blue-bold'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='pppc--blue-pill'>8.9</span>
                </div>
                <div className="pppc--content">
                    <div className="pppc--content-left">
                        <span>500m from center</span>
                        <span className='pppc--green-pill'>free airport taxi</span>
                        <span className='pppc--text-bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='pppc--text-green-bold'>Free cancellation</span>
                    </div>
                    <div className="pppc--content-right">
                        <div className="pppc--price-wrapper">
                            <span className="pppc--price">$125</span>
                            <span className="pppc--text-grey">includes taxes and fees</span>
                        </div>
                        <button
                            onClick={handleNavToHotelPage}
                            className="pppc--btn"
                        >
                            See Availability
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertiesPagePropertyCard
