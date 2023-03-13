import './testimonials.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faStar
} from '@fortawesome/free-solid-svg-icons'
import clsx from 'clsx'

const testimonials = [
    {id: 1, },

]

const Testimonials = () => {

    const iconClass = (stars) => return clsx( {
        'icon-star-blank': stars === 0,
        'icon-star-gold': stars > 0
    })

    return(
        <div className="testimonials-container">
            {testimonials && testimonials.map(testimonial => {
                return (
                    <div className='testimonials-item'>
                        <img className='testimonials-image' src="" alt="testimonials"/>
                        <h5 className="testimonials-text"></h5>
                        <p className="testimonials-text">
                            <FontAwesomeIcon icon={faStar} />
                        </p>
                    </div>
                )
            })
            }
    </div>
    )
}

export default Testimonials
