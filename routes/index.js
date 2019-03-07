'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-05 22:14:49 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-07 23:53:10
 * @Types 首页路由
 */



import Router from 'koa-router'
import user from '../Model/user'



const router = Router()

router.get('/', async (ctx) => {
    ctx.body = `<h1 style="font-size: 48px;text-align: center;">Hello World</h1>`
})

router.get('/user/set', async (ctx) => {
    let ops = {
        name: 'limvc',
        username: '情雨随风',
        password: '000000',
        gravatar: 'https://p2.music.126.net/dkwzyF8mm10AptZNSOqzdA==/109951162892007217.jpg',
        gender: 1
    }

    try {
        let res = await user.insert(ops)
        ctx.body = {
            code: 200,
            msg: '存入成功',
            data: res
        }
    } catch (error) {
        ctx.body = {
            code: 0,
            msg: '存入失败'
        }
    }

})


router.get('/user/get', async (ctx) => {
    let res = await user.find({
        name: 'limvc'
    })

    ctx.body = res
})



export default router