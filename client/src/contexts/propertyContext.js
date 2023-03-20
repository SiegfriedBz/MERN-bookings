import { createContext, useReducer } from 'react'
import { propertyReducer } from '../reducers/propertyReducer'

const initState = {
    properties: [{
        _id: "1",
        name: "TriplExcelsior",
        category: "Palace",
        country: "Switzerland",
        city: "Zurich",
        address: "Zurich Platz",
        distance: "200",
        photos: [""],
        title: "Award winning Palace",
        description: "Amazing place!!!",
        rating: 5,
        rooms: [],
        cheapestPrice: 175,
        featured: true
    }],
    propertiesCountByCity: [
        {}
    ],
    propertiesCountByCategory: [
        {   Hotel: '',
            Apartment: '',
            Resort: '',
            Villa: '',
            Cabin: ''
        }
    ],
}

export const PropertyContext = createContext()

export const PropertyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(propertyReducer, initState)

    return(
        <PropertyContext.Provider value={{...state, dispatch}}>
            { children }
        </PropertyContext.Provider>
    )
}
