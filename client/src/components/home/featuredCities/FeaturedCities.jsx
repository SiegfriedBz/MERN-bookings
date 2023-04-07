import usePropertyContext from '../../../hooks/usePropertyContext'
import athensImage from '../../../assets/img/athens.jpg'
import parosImage from '../../../assets/img/paros.jpg'
import vallettaImage from '../../../assets/img/valletta.jpg'

const FeaturedCities = () => {

    const { propertiesCountByCity } = usePropertyContext()
    const {
        "Athens": athensCount,
        "Paros": parosCount,
        "Valletta": vallettaCount
    } = propertiesCountByCity

    const featuredCitiesList = [
        { id: 1, city: "Athens", count: athensCount || 124, img: athensImage },
        { id: 2, city: "Paros", count: parosCount || 132, img: parosImage },
        { id: 3, city: "Valletta", count: vallettaCount || 148, img: vallettaImage },
    ]

    return(
        <div className="fc-container">
                {featuredCitiesList && featuredCitiesList.map(fc => {
                    const { id, img, city, count } = fc
                    return (
                        <div key={id} className='fc-wrapper'>
                            <div className="fc-img">
                                <div className="fc-info d-flex justify-content-between align-items-center">
                                    <h4 className="name d-inline-block my-0">{city}</h4>
                                    <p className="name my-auto text-warning">{count} properties</p>
                                </div>
                                <img className='fc-img img-fluid' src={img} alt="city"/>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}

export default FeaturedCities
