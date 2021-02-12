const express = require('express')
const router = express.Router()

const bookstoreController = require('../controllers/bookstore.controller')
const accountController = require("../controllers/account.controller")

router.get('/auth', bookstoreController.getAuthBookstore)
router.get('/:username', bookstoreController.getBookstoreByUsername).get('/:username', accountController.getAccountByUsername)

module.exports = router
