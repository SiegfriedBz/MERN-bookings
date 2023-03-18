import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar
} from '@fortawesome/free-solid-svg-icons'
import './testimonials.css'

const testimonials = [
    {id: 1, rating: 5},
    {id: 2, rating: 1},
]

const Testimonials = () => {

    return(
        <div className="testimonials-container">
            {testimonials && testimonials.map(testimonial => {
                return (
                    <div className='testimonials-item'>
                        <img className='testimonials-image' src="" alt="testimonials"/>
                        <h5 className="testimonials-text"></h5>
                        <p className="testimonials-text">
                            {
                                Array(testimonial.rating)
                                    .fill(faStar)
                                    .map((star, index) => {
                                        return(
                                            <FontAwesomeIcon
                                                className='icon-star-gold'
                                                key={index}
                                                icon={star}
                                            />
                                        )
                                    })
                            }
                        </p>
                    </div>
                )
            })
            }
    </div>
    )
}

export default Testimonials
