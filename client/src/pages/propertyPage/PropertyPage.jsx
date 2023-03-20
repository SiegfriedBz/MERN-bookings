import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLocationDot,
    faCircleXmark,
    faArrowCircleLeft,
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons"
import './propertyPage.css'

const initHotel = {
    name: 'Tower Street Appartments',
    city: '',
    images: [
        {id: 1, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 2, src: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"},
        {id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
    ]
}

const PropertyPage = () => {
    // const location = useLocation()

    const [slideId, setSlideId] = useState(1)
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const handleOpenModal = (id) => {
        setSlideId(id)
        setModalIsOpen(true)
    }

    const handleSlide = (direction) => {
        const maxId = initHotel.images.length -1
        switch(direction) {
            case 'L':
                const sliderStarts = slideId === 0
                setSlideId(prev => {
                    return sliderStarts ? maxId : prev - 1
                })
                break
            case 'R':
                const sliderEnds = slideId === maxId
                setSlideId(prev => {
                    return sliderEnds ? 0 : prev + 1
                })
        }
    }

    return(
        <div className='property--container'>
            {modalIsOpen &&
                <div className="property--slider">
                    <FontAwesomeIcon
                        onClick={() => setModalIsOpen(false)}
                        className='property--slider-icon-X'
                        icon={faCircleXmark}
                    />
                    <FontAwesomeIcon
                        onClick={() => handleSlide('L')}
                        className='property--slider-icon'
                        icon={faArrowCircleLeft}
                    />
                    <div className="property--slider-wrapper-image">
                        <img
                            className='property--slider-image'
                            src={initHotel.images[slideId].src}
                            alt=""
                        />
                    </div>
                    <FontAwesomeIcon
                        onClick={() => handleSlide('R')}
                        className='property--slider-icon'
                        icon={faArrowCircleRight} />
                </div>
            }
            <div className="property--wrapper">
                <div className="property--top-wrapper">
                    <div className="property--top-content">
                        <h1 className='property--text-bold'>Tower Street Appartments</h1>
                        <div className="property--location-wrapper">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className='property--text-address'>Paros, Greece</span>
                        </div>
                        <span className='property--text-blue-bold'>Excellent location - 500m from center</span>
                        <span className='property--text-bold'>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='property--text-green-bold'>Excellent location - 500m from center</span>
                    </div>
                    <button className="property--book-btn btn-top">Book now</button>
                </div>
                <div className="property--images-wrapper">
                    {initHotel.images.map(img => {
                        return(
                            <img
                                key={img.id}
                                className='property--image'
                                src={img.src}
                                alt=""
                                onClick={() => handleOpenModal(img.id)}
                            />
                        )
                    })
                    }
                </div>
                <div className="property--bottom-wrapper">
                    <div className="property--bottom-description">
                        <h2>Stay in the heart of Paros</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="property--bottom-card">
                        <span className="property--bottom-card-description">Perfect for a 9 nights stay!</span>
                        <span className="property--bottom-card-price">$945 (9 nights)</span>
                        <button className="property--book-btn btn-bottom">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PropertyPage
