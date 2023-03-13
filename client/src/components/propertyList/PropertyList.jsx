import './propertyList.css'

const propertyTypeList = [
    { id: 1, type: 'Hotels', typeNb: 233, img: "https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=" },
    { id: 2, type: 'Apartments', typeNb: 233, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg" },
    { id: 3, type: 'Resorts', typeNb: 233, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg" },
    { id: 4, type: 'Villas', typeNb: 233, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg" },
    { id: 5, type: 'Cabins', typeNb: 233, img: "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg" }
]

const PropertyList = () => {
    return(
        <div className="property-container">
            {propertyTypeList &&
                propertyTypeList.map(propertyType => {
                    const { img, type, typeNb } = propertyType
                    return (
                        <div className="property-item">
                            <img className="property-image" src={img} alt="property type"/>
                            <h5 className="property-text">{type}</h5>
                            <p className="property-text">{typeNb} {type.toLowerCase()}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PropertyList
