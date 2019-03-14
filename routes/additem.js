'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:03:26
 * @Types 项目模块操作
 */


import Router from 'koa-router'
import Item from '../model/additem'

const router = Router()


router.post('/add/item', async (ctx) => {
    let ops = ctx.request.body

    ctx.body = ops
})


export default router
