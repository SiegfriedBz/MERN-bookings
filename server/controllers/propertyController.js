const mongoose = require('mongoose')
const Property = require('../models/propertyModel')
const customError = require('../utils/error')

const getProperties = async (req, res, next) => {
    console.log('in getProperties()')
    const cities = req.query.cities
    console.log('cities', cities)
    try {
        const properties = await Property
            .find({})
            .sort({ createdAt: -1 })
        // console.log('properties', properties)
        res.status(200).json(properties)
    } catch(error) {
        next(error)
    }
}

// /properties/countByCity?cities=
const getPropertiesCountByCity = async (req, res, next) => {
    const cities = req.query.cities
    const citiesArray = cities
        .split(',')
        .map(city => {
        return city.charAt(0).toUpperCase() + city.slice(1)
    })
     try {
        const propertiesCountByCityArray = await Promise.all(
            citiesArray.map(city => {
                return Property.countDocuments({city: city})
            })
        )
         const data = citiesArray.reduce((acc, curr, index) => {
             acc[curr] = propertiesCountByCityArray[index]
             return acc
         }, {})

        res.status(200).json(data)
    } catch(error) {
        next(error)
    }
}

// /properties/countByCategory
const getPropertiesCountByCategory = async (req, res, next) => {
    const categories = req.query.categories
    const categoriesArray = categories
        .split(',')
        .map(category => {
            return category.charAt(0).toUpperCase() + category.slice(1)
        })
    try {
        const propertiesCountByCategoryArray = await Promise.all(
            categoriesArray.map(category => {
                return Property.countDocuments({category: category})
            })
        )
        const data = categoriesArray.reduce((acc, curr, index) => {
            acc[curr] = propertiesCountByCategoryArray[index]
            return acc
        }, {})

        console.log('data', data)
        res.status(200).json(data)
    } catch(error) {
        next(error)
    }
}

const getProperty = async (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such property')
    }

    try {
        const property = await property.findOne({ _id: id })
        if (!property) {
            throw customError(404, 'No such property')
        }
        res.status(200).json(property)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const createProperty = async (req, res, next) => {
    try {
        const property = await Property.create(req.body)
        res.status(201).json(property)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const updateProperty = async (req, res, next) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such property')
    }

    try {
        const updatedProperty = await Property.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true }
        )
        if(!updatedProperty) {
            throw customError(404, 'No such property')
        }

        res.status(200).json(updatedProperty)
    } catch(error) {
        next(error)
    }
}

// Admin restricted
const deleteProperty = async (req, res, next) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        throw customError(404, 'No such property')
    }

    try {
        const property = await Property.findOneAndDelete(
            { _id: id },
            { returnDocument: 'after' }
        )
        if(!property) {
            throw customError(404, 'No such property')
        }
        res.status(200).json(property)
    } catch(error) {
        next(error)
    }
}

module.exports = {
    getProperties,
    getPropertiesCountByCity,
    getPropertiesCountByCategory,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty
}
