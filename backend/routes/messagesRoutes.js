const express = require('express')

const {
    createMessage
} = require('../controllers/messageControllers')

const router = express.Router()


router.post('/createMessage', createMessage)


module.exports = router