import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faLocationDot,
    faCircleXmark,
    faArrowCircleLeft,
    faArrowCircleRight
} from "@fortawesome/free-solid-svg-icons"

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
        <div className='property-page-container'>
            {modalIsOpen &&
                <div className="p-slider">
                    <FontAwesomeIcon
                        onClick={() => setModalIsOpen(false)}
                        className='icon-X'
                        icon={faCircleXmark}
                    />
                    <FontAwesomeIcon
                        onClick={() => handleSlide('L')}
                        className='icon'
                        icon={faArrowCircleLeft}
                    />
                    <div className="wrapper-image">
                        <img
                            src={initHotel.images[slideId].src}
                            alt="property image pop"
                        />
                    </div>
                    <FontAwesomeIcon
                        onClick={() => handleSlide('R')}
                        className='icon'
                        icon={faArrowCircleRight} />
                </div>
            }

            <div className="p-wrapper">
                <div className="p-top-wrapper">
                    <div className="content">
                        <h1 className='fw-bold'>Tower Street Appartments</h1>
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className='ms-1'>Paros, Greece</span>
                        </div>
                        <span className='fw-bold'>Excellent location - 500m from center</span>
                        <span className='fw-bold text-info'>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='fw-bold text-success'>Excellent location - 500m from center</span>
                    </div>
                    <button className="book-now-btn btn-top">Book now</button>
                </div>

                <div className="p-images-wrapper">
                    {initHotel.images.map(img => {
                        return(
                            <img
                                key={img.id}
                                src={img.src}
                                alt=""
                                onClick={() => handleOpenModal(img.id)}
                            />
                        )
                    })
                    }
                </div>

                <div className="p-bottom-wrapper">
                    <div className="-">
                        <h2>Stay in the heart of Paros</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="content-right">
                        <span className="description">Perfect for a 9 nights stay!</span>
                        <div className='price-wrapper'>
                            <span>$945</span>
                            <span className="price-note">(9 nights)</span>
                        </div>
                        <button className="book-now-btn btn-bottom">Book now</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PropertyPage
