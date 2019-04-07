'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-31 13:26:51 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-04-06 12:41:44
 * @Types 笔记模块操作
 */


import Router from 'koa-router'
import Label from '../model/label'
import Notes from '../model/notes'

const router = Router()

//新增笔记
router.post('/notes/set', async (ctx) => {
    let ops = ctx.request.body
    let label = await Label.find({ name: ops.types })
        ops.color = label[0].color
    let notes = new Notes(ops)
    let res = await notes.save()
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//获取全部笔记
router.get('/notes/get', async (ctx) => {
    let res = await Notes.find({})
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//根据id修改是否发布
router.get('/update/notes/id', async (ctx) => {
    let { _id,status } = ctx.query
    await Notes.update({ _id: _id }, { status: status })
    let res = await Notes.find({})
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//获取已发布的笔记
router.get('/notes/release', async (ctx) => {
    let res = await Notes.find({ status: true })
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})

//根据id删除笔记
router.get('/notes/delete', async (ctx) => {
    let { _id } = ctx.query
    await Notes.remove({ _id: _id })
    let res = await Notes.find()
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



export default router