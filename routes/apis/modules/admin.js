const express = require('express')
const router = express.Router()

const adminController = require('../../../controllers/apis/admin-controller')

const upload = require('../../../middleware/multer')

// router.patch('/users/:id', adminController.patchUser)
// router.get('/users', adminController.getUsers)

// router.get('/categories/:id', categoryController.getCategories)
// router.put('/categories/:id', categoryController.putCategory)
// router.delete('/categories/:id', categoryController.deleteCategory)
// router.get('/categories', categoryController.getCategories)
// router.post('/categories', categoryController.postCategory)

router.get('/restaurants/create', adminController.createRestaurant)
router.get('/restaurants/:id/edit', adminController.editRestaurant)
router.get('/restaurants/:id', adminController.getRestaurant)
router.put('/restaurants/:id', upload.single('image'), adminController.putRestaurant)
router.delete('/restaurants/:id', upload.single('image'), adminController.deleteRestaurant)
router.get('/restaurants', adminController.getRestaurants)
router.post('/restaurants', upload.single('image'), adminController.postRestaurant)

// router.get('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router