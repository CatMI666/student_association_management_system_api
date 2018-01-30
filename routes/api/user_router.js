'use strict'

let router = require('koa-router')()
let user_controller = require('../../app/controllers/user_controller')

router.get('/getUser', user_controller.getUser)
router.post('/registerUser', user_controller.registerUser)

module.exports = router