import './featuredCities.css'

const featuredCitiesList = [
    {id: 1, name: "Athens", nbrOfProperties: 124, img: "https://cf.bstatic.com/xdata/images/city/600x600/971374.jpg?k=95b428839d92c523c81fc50dd7158a9073bbdf92df2a5166748b2d396976ae32&o="},
    {id: 2, name: "Parikia", nbrOfProperties: 112, img: "https://cf.bstatic.com/xdata/images/city/600x600/691141.jpg?k=d93840031fcab9f69ffb70f698174f8b223b700f6af6ed756ff80f222aa819a7&o="},
    {id: 3, name: "Valletta", nbrOfProperties: 124, img: "https://cf.bstatic.com/xdata/images/city/square250/972719.webp?k=27c3c14f7597b6ef61ae50eabb92b28f46d2c70cac3a201fce617e14cb1dad9d&o="},
]

const FeaturedCities = () => {

    return(
        <div className='fc-container'>
            {featuredCitiesList && featuredCitiesList.map((city) => {
                const { img, name, nbrOfProperties } = city
                return (
                    <div className='fc-item'>
                        <img className='fc-image' src={img} alt="city"/>
                        <h4 className="fc-text">{name}</h4>
                        <p className="fc-text">{nbrOfProperties} properties</p>
                    </div>
                )
            })}
        </div>
    )
}

export default FeaturedCities
