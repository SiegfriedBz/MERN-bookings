import './hotel.css'

const Hotel = ({ hotel }) => {
    const { id, name } = hotel
    return(
        <div>Hotel
            { name }
        </div>
    )
}

export default Hotel
