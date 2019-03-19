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
        title: 'ElementUI 之 Tree 组件切换全局 disabled',
        //描述
        descript: `到 ElementUI 2.4.8 为止，Tree 组件还不能一次性控制所有节点是否可选，这里做了实验性的尝试，在切换全局 disabled 的同时，保留每个节点原本的 disabled 状态，做到可恢复。`,
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
router.get('/tubok/get', async(ctx) => {
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
router.get('/tubok/get', async(ctx) => {
    let res = await Tubok.find({ draft: true })

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//修改文章是否为草稿
router.post('/tubok/update', async(ctx) => {
    let { _id,draft } = ctx.request.body
    await Tubok.update({ _id: _id }, { draft: draft })
    let res = await Tubok.find({})

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



//删除草稿
router.get('/tubok/delete', async(ctx) => {
    let { _id } = ctx.query
    await Tubok.remove({ _id: _id })
    let res = await Tubok.find({})
    
    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})



export default router