import './featuredCategories.css'
import usePropertyContext from '../../hooks/usePropertyContext'

const FeaturedCategories = () => {
    const { propertiesCountByCategory } = usePropertyContext()

    const { 'Apartment': ApartmentCount,
            'Cabin': CabinCount,
            'Hotel': HotelCount,
            'Resort': ResortCount,
            'Villa': VillaCount
    } = propertiesCountByCategory

    const list = Array.from(Object.keys(propertiesCountByCategory).length)
    console.log('list', list)

    console.log('propertiesCountByCategory', propertiesCountByCategory)

    const featuredCategoriesList = [
        { id: 1, category: 'Hotels', count: HotelCount, img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" },
        { id: 2, category: 'Apartments', count: ApartmentCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" },
        { id: 3, category: 'Resorts', count: ResortCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" },
        { id: 4, category: 'Villas', count: VillaCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" },
        { id: 5, category: 'Cabins', count: CabinCount, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" }
    ]



    return(
        <div className="fc--container">
            {featuredCategoriesList &&
                featuredCategoriesList.map(fc => {
                    const { id, img, category, count } = fc
                    return (
                        <div key={id} className="fc--item">
                            <img className="fc--image" src={img} alt="property category"/>
                            <h4 className="fc--text">{category}</h4>
                            <p className="fc--text">{count} {category.toLowerCase()}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FeaturedCategories
