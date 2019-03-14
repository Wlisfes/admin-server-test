'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:12:45 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:09:43
 * @Types mongoose配置 
 */


import mongoose from 'mongoose'
import { MONGODB_URL } from '../config/index'


//连接数据库
mongoose.connect(MONGODB_URL)

mongoose.connection.on('open', () => {
    console.log(`数据库连接成功`)
})

mongoose.connection.on('error', () => {
    console.log(`数据库连接失败`)
})
    


export default mongoose