'use strict'

let development_env = require('./dev')
let test_env = require('./test')

//根据不同的NODE_ENV，输出不同的配置对象，默认输出development的配置对象
module.exports = {
    development: development_env,
    test: test_env,
    database: 'mongodb://localhost:27017/samsa'
}[process.env.NODE_ENV || 'development']