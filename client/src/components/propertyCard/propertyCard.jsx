import { useNavigate } from "react-router-dom";

const PropertyCard = ({ property }) => {
    const { id, name } = property

    const navigate = useNavigate()

    const handleNavToHotelPage = () => {
        navigate(`/properties/${id}`, { state: property })
    }

    return(
        <div className="pc-container">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                alt="property image"
            />
            <div className="pc-wrapper">
                <div className="top">
                    <span className='text-primary fw-bolder'>Tower Street Appartments</span>
                    <span className='text-warning fw-bolder px-3 py-2'>Excellent</span>
                    <span className='badge rounded-pill bg-info p-2'>8.9</span>
                </div>
                <div className="content">
                    <div className="content-wrapper left">
                        <span>500m from center</span>
                        <span className='badge rounded-pill bg-success w-50 py-2'>Free airport taxi</span>
                        <span className='fw-bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='text-success fw-bold'>Free cancellation</span>
                    </div>
                    <div className="content-wrapper right">
                        <div className="price-wrapper">
                            <span className="price">$125</span>
                            <span className="text-secondary text-end">includes taxes and fees</span>
                        </div>
                        <button className='btn btn-sm btn-info p-2'
                            onClick={handleNavToHotelPage}
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
