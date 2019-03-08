'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-07 23:11:55 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-08 23:41:46
 * @Types 用户数据
 */



import mongoose from '../mongoose/mongo'
var Schema = mongoose.Schema

const UserSchema = new Schema({
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


const User = mongoose.model('User', UserSchema)

export default User
