import './error.css'

const ErrorPage = ({error}) => {
    return(
        <div className="error--container">
            <h1>Error...{error}</h1>
        </div>
    )
}

export default ErrorPage
