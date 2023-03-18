import './hotelCard.css'

const HotelCard = ({ hotel }) => {
    const { id, name } = hotel
    return(
        <div className="hotel-card">
            <img
                className='hotel-card--img'
                src="https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o="
                alt=""
            />
            <div className="hotel-card--body">
                <div className="hotel-card--body-top">
                    <span className='title'>Tower Street Appartments</span>
                    <span>Excellent</span>
                    <span className='blue-pill'>8.9</span>
                </div>
                <div className="hotel-card--body-content">
                    <div className="hotel-card--body-content-left">
                        <span>500m from center</span>
                        <span className='green-pill'>free airport taxi</span>
                        <span className='bold'>Studio appartement with air conditioning</span>
                        <span>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='green-text'>Free cancellation</span>
                    </div>
                    <div className="hotel-card--body-content-right">

                        <span className="price">$125</span>
                        <button className="hotel-card--body-btn">See Availability</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelCard
