import {
    SET_PROPERTIES,
    CREATE_PROPERTY,
    UPDATE_PROPERTY,
    DELETE_PROPERTY,
    SET_PROPERTIES_COUNT_BY_CITY,
    SET_PROPERTIES_COUNT_BY_CATEGORY
} from './propertyActionTypes'

export const propertyReducer = (state, action) => {
    let _id
    switch(action.type) {
        case SET_PROPERTIES:
            return { ...state, properties: action.payload }
        case CREATE_PROPERTY:
            return { ...state, properties: [action.payload, ...state.properties] }
        case UPDATE_PROPERTY:
            _id = action.payload._id
            return {...state, properties: state.properties.map(p => {
                return p._id !== _id ? p : action.payload
                })}
        case DELETE_PROPERTY:
            _id = action.payload._id
            return {...state, properties: state.properties.filter(p => {
                return p._id !== _id
                })}
        case SET_PROPERTIES_COUNT_BY_CITY:
            return { ...state, propertiesCountByCity: action.payload }
        case SET_PROPERTIES_COUNT_BY_CATEGORY:
            return { ...state, propertiesCountByCategory: action.payload }
        default:
            return state
    }
}
