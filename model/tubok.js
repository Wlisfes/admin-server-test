'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-18 20:39:32 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-18 20:53:26
 * @Types 文章数据
 */


import db from '../mongo/db'

const Tubok = new db.Schema({
    //标题
    title: {
        type: String,
        required: true
    },
    //描述
    descript: {
        type: String,
        required: true
    },
    //类型
    types: {
        type: String,
        required: true
    },
    //内容
    content: {
        type: String,
        required: true
    },
    //未发布
    status: {
        type: Boolean,
        default: false
    },
    //缩略图
    image: {
        type: String,
        default: ''
    },
    //发布日期
    reldate: {
        type: Date,
        default: Date.now
    },
    //草稿
    draft: {
        type: Boolean,
        default: false
    }
})


const tubok = db.model('Tubok', Tubok)


export default tubok