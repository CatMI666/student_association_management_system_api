'use strict'

let path = require('path')

//错误日志输出完整路径
let errorLogPath = path.resolve(__dirname, "../logs/error/error")
 
//响应日志输出完整路径
let responseLogPath = path.resolve(__dirname, "../logs/response/response")

module.exports = {
  appenders: {
    out: { "type": 'console' },
    //错误日志
    errorLogger: {
      type: "dateFile",                   //日志类型
      filename: errorLogPath,             //日志输出位置
      encoding: "utf-8",
      maxLogSize: 2000000,
      numBackups: 5,
      alwaysIncludePattern: true,          //是否总是有后缀名
      pattern: "-yyyy-MM-dd-hh.log"       //后缀，每小时创建一个新的日志文件
    },
    //响应日志
    resLogger: {
      type: "dateFile",
      filename: responseLogPath,
      encoding: "utf-8",
      maxLogSize: 2000000,
      numBackups: 5,
      alwaysIncludePattern: true,
      pattern: "-yyyy-MM-dd-hh.log"
    }
  },
  categories: {
    default: {
      appenders: ['out'],
      level: 'info'
    },
    errorLogger: {
      appenders: ['errorLogger'],
      level: 'error'
    },
    resLogger: {
      appenders: ['resLogger'],
      level: 'info'
    }
  },
}