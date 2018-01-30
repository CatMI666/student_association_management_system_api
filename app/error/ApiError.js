'use strict'

const ApiErrorNames = require('./ApiErrorNames')

/**
 * 自定义Api异常
 */
class ApiError extends Error{
    
  //构造方法
  constructor(error_name){
    super()

    let error_info = ApiErrorNames.getErrorInfo(error_name)
    let self = this
    self.name = error_name
    self.code = error_info.code
    self.message = error_info.message
  }
}

module.exports = ApiError