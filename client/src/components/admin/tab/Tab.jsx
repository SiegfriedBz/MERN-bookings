import './tab.css'

const Tab = ({ tabName, activeTab, children }) => {

    if (activeTab !== tabName) return null

    return(
        <div className="tab--content">
            <>
                { children }
            </>
        </div>
    )
}

export default Tab
