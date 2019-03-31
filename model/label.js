'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-31 12:56:47 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 15:57:50
 * @Types 标签数据
 */


import db from '../mongo/db'

const Label = new db.Schema({
    //标签
    name: {
        type: String,
        required: true
    },
    //标签颜色
    color: {
        type: String,
        default: '#C7BFFC'
    },
    //标签是否开放
    status: {
        type: Boolean,
        default: false
    }
})

const label = db.model('Label', Label)


export default label