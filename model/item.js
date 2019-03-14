'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 20:24:35 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:12:49
 * @Types 项目数据
 */


import db from '../mongo/db'

const Item = new db.Schema({
    //项目名称
    name: {
        type: String,
        default: ''
    },
    //项目描述
    description: {
        type: String,
        default: ''
    },
    //项目类型
    types: {
        type: String,
        default: "nodejs"
    },
    //GitHub地址
    github: {
        type: String,
        default: "https://github.com/Wlisfes"
    },
    //未发布
    status: {
        type: Boolean,
        default: false
    }
})


const item = db.model('Item', Item)

export default item