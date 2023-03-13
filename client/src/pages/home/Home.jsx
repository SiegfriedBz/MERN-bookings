import './home.css'
import FeaturedCities from '../../components/featuredCities/FeaturedCities'
import PropertyList from '../../components/propertyList/PropertyList'
import Testimonials from '../../components/'

const Home = () => {
    return(
        <div className="home-container">
            <FeaturedCities />
            <h2 className="home-title">Browse by property types</h2>
            <PropertyList />
            <Testimonials />
        </div>
    )
}

export default Home
