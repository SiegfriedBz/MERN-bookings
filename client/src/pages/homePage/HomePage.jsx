import FeaturedCities from '../../components/featuredCities/FeaturedCities'
import PropertyTypes from '../../components/propertyTypes/PropertyTypes'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'
import './homePage.css'

const HomePage = () => {
    return(
        <div className="home--container">
            <FeaturedCities />
            <h2>Browse by property types</h2>
            <PropertyTypes />
            <h2>Home guests love</h2>
            <FeaturedProperties />
        </div>
    )
}

export default HomePage
