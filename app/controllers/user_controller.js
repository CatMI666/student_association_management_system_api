const ApiError = require('../error/ApiError')
const ApiErrorNames = require('../error/ApiErrorNames')
//获取用户
module.exports = {
  async getUser(ctx, next) {
    //如果id != 1抛出API 异常
    if(ctx.query.id != 1){
      throw new ApiError(ApiErrorNames.USER_NOT_EXIST)
    }
    ctx.body = {
      username: '阿，希爸',
      age: 30
    }
  },
  
  //用户注册
  async registerUser(ctx, next) {
    console.log('registerUser', ctx.request.body)
  }
}