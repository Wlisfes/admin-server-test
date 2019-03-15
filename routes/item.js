'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-15 17:57:20
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


//获取全部项目
router.get('/get/item', async(ctx) => {
    let res = await Item.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//修改项目
router.post('/update/item', async(ctx) => {
    let { _id } = ctx.request.body
    await Item.update({ _id: _id }, ctx.request.body)
    let res = await Item.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//删除项目
router.get('/delete/item', async(ctx) => {
    let { _id } = ctx.query
    await Item.remove({ _id: _id })
    let res = await Item.find({})
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

export default router
