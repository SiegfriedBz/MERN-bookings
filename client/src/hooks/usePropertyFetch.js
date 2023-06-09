import { useState, useEffect } from 'react'
import usePropertyContext from './usePropertyContext'
import {
    SET_PROPERTIES,
    SET_PROPERTIES_COUNT_BY_CITY,
    SET_PROPERTIES_COUNT_BY_CATEGORY
} from '../reducers/propertyActionTypes'

const BASE_URL = 'http://localhost:3001/api/properties'

const usePropertyFetch = () =>  {

    const { dispatch } = usePropertyContext()

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        (async () => {
            await getProperties({})
            await getPropertiesCountByCity({
                url: `${BASE_URL}/countByCity`,
                query: [{
                        queryKey: 'cities',
                        queryParams: ['athens', 'paros', 'valletta']
                }],
                dispatchType: SET_PROPERTIES_COUNT_BY_CITY
            })
            await getPropertiesCountByCategory({
                url: `${BASE_URL}/countByCategory`,
                query: [{
                        queryKey: 'categories',
                        queryParams: ['Hotel', 'Apartment', 'Resort', 'Villa', 'Cabin']
                }],
                dispatchType: SET_PROPERTIES_COUNT_BY_CATEGORY
            })
        })()
    }, [])

    // {query: [{ queryKey:'', queryParams: [] }]}
    const fetchURL = (url, query) => {
        if (query) {
            const fullQuery = query.map(q => {
              return `?${q.queryKey}=${q.queryParams.join(',')}`
            })
            const fullUrl = `${url}${fullQuery.join('')}`
            return fullUrl
        }
        return url
    }

    const fetchOptions = (method, body) => {
        const options =  {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            }
        }
        if (method === 'POST' || method === 'PATCH') {
            options.body = JSON.stringify(body)
        }
        return options
    }

    const fetchHasNoError = (status) => {
        return status !== 400 || status !== 500
    }

    const fetchData = async(
            {
                url = BASE_URL,
                method = "GET",
                body = {},
                query = [],
                dispatchType = SET_PROPERTIES
            }
        ) => {

        setError(false)
        setIsLoading(true)
        try {
            const response = await fetch(
                fetchURL(url, query),
                fetchOptions(method, body)
            )
            if (fetchHasNoError(response.status)) {
                const data = await response.json()
                return dispatch({
                    type: dispatchType,
                    payload: data
                })
            } throw Error(`Error on method: ${method} with status: ${response.status} `)
        } catch(error) {
            console.error(error)
            setError(error)
        }
        setIsLoading(false)
    }

    // getProperties({})
    // route /api/properties
    // getProperties({query: [{queryKey: 'cities', queryParams: ['zurich', 'lugano']}]})
    // route /api/properties?cities=zurich,lugano
    const getProperties = async (...args) => {
        await fetchData(...args)
    }

    // getPropertiesCountByCity({query: [{queryKey: 'cities', queryParams: ['zurich', 'lugano']}]})
    // route /api/properties/countByCities?cities=zurich,lugano
    const getPropertiesCountByCity = async (...args) => {
        await fetchData(...args)
    }

    // getPropertiesCountByCategory({query: [{queryKey: 'categories', queryParams: ['Hotel', 'Apartment', 'Resort', 'Villa', 'Cabin']}]})
    // route /api/properties/countByCategory?categories=zurich,lugano
    const getPropertiesCountByCategory = async (...args) => {
        await fetchData(...args)
    }

    const createProperty = async (...args) => {
        await fetchData(...args)
    }

    const updateProperty = async (...args) => {
        // await fetchData(...args)
    }

    return {
        isLoading,
        error,
        getProperties,
        createProperty,
        updateProperty,
        // deleteProperty
    }
}

export default usePropertyFetch
