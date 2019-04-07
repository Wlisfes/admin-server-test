'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-31 13:22:53 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-04-06 12:29:34
 * @Types 笔记数据
 */

import db from '../mongo/db'

const Notes = new db.Schema({
    //标题
    title: {
        type: String,
        required: true
    },
    //标签类型
    types: {
        type: String,
        required: true
    },
    //标签颜色
    color: {
        type: String,
        default: '#C7BFFC'
    },
    //内容
    content: {
        type: String,
        required: true
    },
    //发布日期
    reldate: {
        type: Date,
        default: Date.now
    },
    //未发布
    status: {
        type: Boolean,
        default: false
    }
})


const notes = db.model('Notes', Notes)


export default notes