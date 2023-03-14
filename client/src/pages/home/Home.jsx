import './home.css'
import FeaturedCities from '../../components/featuredCities/FeaturedCities'
import PropertyTypes from '../../components/propertyTypes/PropertyTypes'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties'

const Home = () => {
    return(
        <div className="home-container">
            <FeaturedCities />
            <h2 className="home-title">Browse by property types</h2>
            <PropertyTypes />
            <h2 className="home-title">Home guests love</h2>
            <FeaturedProperties />
        </div>
    )
}

export default Home
