import { useContext } from 'react'
import { PropertyContext } from '../contexts/propertyContext'

const usePropertyContext = () => {
    const context = useContext(PropertyContext)
    const { properties, dispatch } = context
    console.log('properties', properties)

    return context
}

export default usePropertyContext
