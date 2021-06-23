const router = require('express').Router()
const authController = require('../controller/Auth')




router.post('/admin', authController.checkAdminAuth)
router.post('/user/register', authController.registerUser)


module.exports = router