import './footer.css'

const Footer = () => {

    const item = (
            <ul className="footer-list">
                <li className="footer-item">Countries</li>
                <li className="footer-item">Regions</li>
                <li className="footer-item">Cities</li>
                <li className="footer-item">Districts</li>
                <li className="footer-item">Airports</li>
                <li className="footer-item">Hotels</li>
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
            <div className="footer-lists">
                {
                    getItemsList()
                }
            </div>
            <p className='footer-copy'>&#169; 2023 MangooBooking</p>
        </div>
    )
}

export default Footer
