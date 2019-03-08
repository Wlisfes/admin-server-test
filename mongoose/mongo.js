'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-07 22:45:15 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-08 23:14:13
 * @Typrs mongoose数据库
 */



import mongoose from 'mongoose'
import { MONGODB_URL } from '../config'


const debuger = process.env.NODE_ENV !== 'production'
    mongoose.set('debug', debuger)


// 连接数据库
mongoose.connect(MONGODB_URL, { useNewUrlParser: true })
// mongoose.connect(MONGODB_URL)

mongoose.connection.on('open', () => {
    console.log(`数据库连接成功`)
})

mongoose.connection.on('error', () => {
    console.log(`数据库连接失败`)
})



export default mongoose