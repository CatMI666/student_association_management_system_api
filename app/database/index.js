'use strict'

const fs = require('fs') // 注册node.js 文件系统模块
const path = require('path') // 注册 文件路径模块

const database = {
  base: 'mongodb://localhost/sams_base_data'
}

module.exports = {
  fs,
  path,
  database
}