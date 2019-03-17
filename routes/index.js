'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-16 21:24:15
 * @Types 路由首页
 */


import Router from 'koa-router'
import axios from 'axios'
const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 60px;text-align: center;">Hello World</h1>`
})


router.get('/tm', async (ctx) => {
    let res = await axios.get(`https://blogapi.naice.me/api/article/get?current_page=1`)

    ctx.body = res.data
})


export default router
