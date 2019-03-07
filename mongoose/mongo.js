'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-07 22:45:15 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-07 23:31:18
 * @Typrs mongoose数据库
 */



import glob from 'glob'
import mongoose from 'mongoose'
import { resolve } from 'path'
import { MONGODB_URL } from '../config'



const debuger = process.env.NODE_ENV !== 'production'


mongoose.Promise = global.Promise
mongoose.set('debug', debuger)


// 数据模型引入
glob.sync(resolve(__dirname, '../Model/*.js')).forEach(require)

export default () => {
    // 连接数据库
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
    
    mongoose.connection.on('open', () => {
        console.log(`数据库连接成功`)
    })

    mongoose.connection.on('error', () => {
        console.log(`数据库连接失败`)
    })

    return mongoose
}