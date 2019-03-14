'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 23:42:15
 * @Types 项目模块操作
 */


import Router from 'koa-router'
import Item from '../model/item'

const router = Router()

//新增项目
router.post('/set/item', async (ctx) => {
    let ops = ctx.request.body
    let item = new Item(ops)
    let res = await item.save()
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//获取项目
router.get('/get/item', async(ctx) => {
    let res = await Item.find({})

    ctx.body = res
})

export default router
