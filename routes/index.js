'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-05 22:14:49 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-05 22:31:42
 * @Types 首页路由
 */



import Router from 'koa-router'



const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 48px;text-align: center;">Hello World</h1>`
})




export default router