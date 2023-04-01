import FeaturedCities from '../../components/home/featuredCities/FeaturedCities'
import FeaturedCategories from '../../components/home/featuredCategories/FeaturedCategories'
import FeaturedProperties from '../../components/home/featuredProperties/FeaturedProperties'

const HomePage = () => {
    return(
        <div className="home-page">
            <div className="container">
                <FeaturedCities />
                <h2>Browse by property types</h2>
                <FeaturedCategories />
                <h2>Home guests love</h2>
                <FeaturedProperties />
            </div>
        </div>
    )
}

export default HomePage
