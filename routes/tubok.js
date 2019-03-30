'use strict'

/*
 * @Author: Parker 
 * @Date: 2019-03-18 16:53:06 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-31 00:58:42
 * @Types 文章操作
 */


import Router from 'koa-router'
import Tubok from '../model/tubok'
const router = Router()



//添加文章
router.post('/tubok/set', async (ctx) => {
    let { content,title,descript,types,image } = ctx.request.body
    let ops = {
        title: title,
        //描述
        descript: descript,
        //类型
        types: types,
        //内容
        content: content,
        //未发布
        status: false,
        //缩略图
        image: image,
    }
    let tubok = new Tubok(ops)
    let res = await tubok.save()

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//获取全部文章
router.get('/tubok/get/all', async(ctx) => {
    let res = await Tubok.find({ draft: false })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//获取已发布的文章
router.get('/tubok/release', async(ctx) => {
    let res = await Tubok.find({ draft: false, status: true })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//根据类型获取已发布的文章
router.get('/tubok/types', async(ctx) => {
    let { types } = ctx.query
    let res = await Tubok.find({
        draft: false,
        status: true,
        types: types
    })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//根据id获取文章
router.get('/tubok/get/id', async(ctx) => {
    let { _id } = ctx.query
    let res = await Tubok.find({ _id: _id })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//获取全部草稿
router.get('/tubok/draft/all', async(ctx) => {
    let res = await Tubok.find({ draft: true })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//根据id修改文章是否发布
router.post('/update/tubokstatus/id', async(ctx) => {
    let { _id,status } = ctx.request.body
    await Tubok.update({ _id: _id }, { status: status })
    let res = await Tubok.find({ draft: false })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//根据id修改文章是否为草稿
router.post('/update/tubokdraft/id', async(ctx) => {
    let { _id,draft } = ctx.request.body
    let t = draft ? false : true
    if(!draft) {
        //false为草稿转文章
        await Tubok.update({ _id: _id },{ 
            draft: draft,
            status: false
        })
    } else {
        //true为文章转草稿
        await Tubok.update({ _id: _id },{ draft: draft })
    }
    
    let res = await Tubok.find({ draft: t })
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//删除草稿
router.get('/tubok/delete/id', async(ctx) => {
    let { _id } = ctx.query
    await Tubok.remove({ _id: _id })
    let res = await Tubok.find({ draft: true })
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



export default router