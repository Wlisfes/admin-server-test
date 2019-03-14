'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-07 23:11:55 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:12:28
 * @Types 用户数据
 */


import db from '../mongo/db'

const User = new db.Schema({
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

const user = db.model('User', User)


export default user
