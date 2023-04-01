const Footer = () => {

    const item = (
            <ul className="list">
                <li className="item">Countries</li>
                <li className="item">Regions</li>
                <li className="item">Cities</li>
                <li className="item">Districts</li>
                <li className="item">Airports</li>
                <li className="item">Hotels</li>
            </ul>
    )

    const getItemsList= () => {
        return(
            Array(5).fill(item)
                .map((x, index) => {
                    return <div key={index}>{x}</div>
                })
        )
    }

    return(
        <div className='footer-container'>
            <div className="footer-list-wrapper">
                {
                    getItemsList()
                }
            </div>
            <p>&#169; 2023 MangooBooking</p>
        </div>
    )
}

export default Footer
