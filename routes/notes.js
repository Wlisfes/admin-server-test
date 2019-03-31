'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-31 13:26:51 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 13:30:42
 * @Types 笔记模块操作
 */


import Router from 'koa-router'
import Label from '../model/label'
import Notes from '../model/notes'

const router = Router()

//新增笔记
router.post('/notes/set', async (ctx) => {
    let ops = ctx.request.body
    let notes = new Notes(ops)
    let res = await notes.save()

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }

})


export default router