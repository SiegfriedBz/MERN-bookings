const express = require('express')
const router = express.Router()
const {
    getProperties,
    getPropertiesCountByCity,
    getPropertiesCountByCategory,
    getProperty,
    createProperty,
    updateProperty,
    deleteProperty
} = require('../controllers/propertyController')
const {
    requireAdminAuthorization
} = require('../utils/middleware/checkAccessTokenCookie')

router.get('/', getProperties)
router.get('/countByCity', getPropertiesCountByCity)
router.get('/countByCategory', getPropertiesCountByCategory)
router.get('/:id', getProperty)
router.post('/', requireAdminAuthorization, createProperty) // Admin restricted
router.patch('/:id', requireAdminAuthorization, updateProperty) // Admin restricted
router.delete('/:id', requireAdminAuthorization, deleteProperty) // Admin restricted

module.exports = router
