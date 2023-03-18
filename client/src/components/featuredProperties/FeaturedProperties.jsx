import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar
} from '@fortawesome/free-solid-svg-icons'
import './featuredProperties.css'

const featuredPropertiesList = [
    {id: 1, name: 'Aparthotel Stare Miasto', city: 'Madrid', price: 120, ratingValue: 5, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
    {id: 2, name: 'Comfort Suites Airport', city: 'Malaga', price: 140, ratingValue: 4, ratingComment: 'Exceptional', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"},
    {id: 3, name: 'Four Seasons HotelCard', city: 'Lisbon', price: 99, ratingValue: 5, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/square600/75158463.webp?k=b1da35e36e2ede12d471364c557875aa0dfa0841166205091fc9de46c00c5ffc&o=&s=1"},
    {id: 4, name: 'Hilton Garden Inn', city: 'Paros', price: 105, ratingValue: 4, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"}
]

const FeaturedProperties = () => {

    const getStars = (ratingValue) => {
        return(
            Array(Math.ceil(ratingValue))
                .fill(faStar)
                .map((star, index) => {
                    return(
                        <FontAwesomeIcon
                            className='icon-star-gold'
                            key={index}
                            icon={star}
                        />
                    )
                }
            )
        )
    }

    return(
        <div className="fp-container">
            {featuredPropertiesList &&
                featuredPropertiesList.map(p => {
                    const {id, name, city, price, ratingValue, ratingComment, img} = p
                    return (
                        <div key={id} className="fp-item">
                            <img src={img} className="fp-image" alt="featured property"/>
                            <span className="fp-name">{name}</span>
                            <span className="fp-city">{city}</span>
                            <span className="fp-price">from <strong>${price}</strong></span>
                            <span className="fp-text">{getStars(ratingValue)}</span>
                            <span className="fp-text">{ratingComment}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeaturedProperties
