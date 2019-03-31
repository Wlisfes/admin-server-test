'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-31 13:08:54 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 16:40:18
 * @Types 标签模块操作
 */


import Router from 'koa-router'
import Label from '../model/label'

const router = Router()

//新增标签
router.post('/label/set', async (ctx) => {
    let ops = ctx.request.body
    let label = new Label(ops)
              await label.save()
    let res = await Label.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//获取全部标签
router.get('/label/get', async(ctx) => {
    let res = await Label.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//获取已开放的标签
router.get('/label/release', async(ctx) => {
    let res = await Label.find({ status: true })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//修改标签
router.post('/label/update', async(ctx) => {
    let { _id } = ctx.request.body
    await Label.update({ _id: _id }, ctx.request.body)
    let res = await Label.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//删除标签
router.get('/label/delete', async(ctx) => {
    let { _id } = ctx.query
    await Label.remove({ _id: _id })
    let res = await Label.find({})
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


export default router