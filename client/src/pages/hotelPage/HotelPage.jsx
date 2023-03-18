import { useState } from 'react'
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import './hotelPage.css'

const initHotel = {
    name: 'Tower Street Appartments',
    city: '',
    images: [
        {id: 1, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 2, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 3, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 4, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 5, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
        {id: 6, src: "https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"},
    ]
}

const HotelPage = () => {
    const location = useLocation()
    console.log(location.state)

    return(
        <div className='hotel--container'>
            <div className="hotel--wrapper">
                <div className="hotel--top-wrapper">
                    <div className="hotel--top-content">
                        <h1 className='hotel--text-blue-bold'>Tower Street Appartments</h1>
                        <div className="hotel--location-wrapper">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <span className='hotel--text-address'>Paros, Greece</span>
                        </div>
                        <span className='hotel--text-blue-bold'>Excellent location - 500m from center</span>
                        <span className='hotel--text-green-bold'>Entire studio - 1 bathroom - 21m2 - Bed King size </span>
                        <span className='hotel--text-blue-bold'>Excellent location - 500m from center</span>
                    </div>
                    <button className="hotel--book-btn btn-top">Book now</button>
                </div>
                <div className="hotel--images-wrapper">
                    {initHotel.images.map(img => {
                        return(
                            <img
                                key={img.id}
                                className='hotel--image'
                                src={img.src}
                                alt=""
                            />
                        )
                    })
                    }
                </div>
                <div className="hotel--bottom-wrapper">
                    <div className="hotel--bottom-description">
                        <h3>GRAB YOUR DEAL</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="hotel--bottom-card">
                        <span className="hotel--bottom-card-content">Lorem ipsum dolor sit amet</span>
                        <span className="hotel--bottom-card-price">$945 (9 nights)</span>
                        <button className="hotel--book-btn">Book now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HotelPage
