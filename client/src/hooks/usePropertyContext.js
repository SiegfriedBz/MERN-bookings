import { useContext } from 'react'
import { PropertyContext } from '../contexts/propertyContext'

const usePropertyContext = () => {
    const context = useContext(PropertyContext)
    // const {
    //     properties,
    //     propertiesCountByCity,
    //     propertiesCountByCategory,
    //     dispatch
    // } = context

    return context
}

export default usePropertyContext
