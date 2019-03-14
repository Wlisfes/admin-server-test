'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-14 22:58:31
 * @Types 路由首页
 */


import Router from 'koa-router'
const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 60px;text-align: center;">Hello World</h1>`
})



export default router
