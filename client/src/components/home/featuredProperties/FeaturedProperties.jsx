import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const featuredPropertiesList = [
    {id: 1, name: 'Aparthotel Stare Miasto', city: 'Madrid', price: 120, ratingValue: 5, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
    {id: 2, name: 'Comfort Suites Airport', city: 'Malaga', price: 140, ratingValue: 4, ratingComment: 'Exceptional', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"},
    {id: 3, name: 'Four Seasons', city: 'Lisbon', price: 99, ratingValue: 5, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/square600/75158463.webp?k=b1da35e36e2ede12d471364c557875aa0dfa0841166205091fc9de46c00c5ffc&o=&s=1"},
    {id: 4, name: 'Hilton Garden Inn', city: 'Paros', price: 105, ratingValue: 4, ratingComment: 'Excellent', img: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"}
]

const FeaturedProperties = () => {

    const getStars = (ratingValue) => {
        return(
            Array(Math.ceil(ratingValue))
                .fill(faStar)
                .map((star, index) => {
                    return(
                        <FontAwesomeIcon key={index} icon={star} className='text-warning'/>
                    )
                }
            )
        )
    }

    return(
        <div className="fpp-container">
            {featuredPropertiesList &&
                featuredPropertiesList.map(p => {
                    const {id, name, city, price, ratingValue, ratingComment, img} = p
                    return (
                        <div key={id} className="fpp-wrapper">
                            <img className='fpp-img' src={img} alt="featured property"/>
                            <span className="fpp-name fw-bolder px-2 pt-1">{name}</span>
                            <span className="fw-bold px-2 pt-1">{city}</span>
                            <div className="price-rating-wrapper">
                                <div className="rating-wrapper">
                                    <span className="px-2">{getStars(ratingValue)}</span>
                                    <span className='text-info px-2 pb-2'>{ratingComment}</span>
                                </div>
                                <span className="text-success fw-bold px-2 pb-1">from <strong>${price}</strong></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeaturedProperties
