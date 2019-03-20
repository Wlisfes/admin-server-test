'use strict'

/*
 * @Author: Parker 
 * @Date: 2019-03-18 16:53:06 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-19 22:35:19
 * @Types 文章操作
 */


import Router from 'koa-router'
import Tubok from '../model/tubok'
const router = Router()



//添加文章
router.post('/tubok/set', async (ctx) => {
    let { content } = ctx.request.body

    let ops = {
        title: 'vue-Markdown编辑器',
        //描述
        descript: `一款使用marked和highlight.js开发的一款markdown编辑器，目前只支持在vue项目中使用。 编辑器涵盖了常用的markdown编辑器功能，工具栏可自定义配置，也可进行二次开发。`,
        //类型
        types: 'vuejs',
        //内容
        content: content,
        //未发布
        status: false,
        //缩略图
        image: 'https://avatars3.githubusercontent.com/u/10137653?s=400&v=4',
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
    await Tubok.update({ _id: _id },{ draft: draft })
    let res = await Tubok.find({ draft: false })

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
    let res = await Tubok.find({ draft: false })
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



export default router