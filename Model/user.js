'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-07 23:11:55 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-07 23:36:55
 * @Types 用户数据
 */



import mongoose from 'mongoose'



const userSchema = new mongoose.Schema({
    //名字
    name: {
        type: String,
        default: ''
    },
    //用户名字
    username: {
        type: String,
        default: ''
    },
    //密码
    password: {
        type: String,
        default: ''
    },
    //头像
    gravatar: {
        type: String,
        default: ''
    },
    //性别
    gender: {
        type: Number,
        default: 0
    }
})


const user = mongoose.model('user', userSchema)

export default user
