'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:59:51 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-18 16:46:16
 * @Types 用户模块操作
 */



import Router from 'koa-router'
import User from '../model/user'

const router = Router()


//新增数据
router.get('/user/set', async (ctx) => {
    let user = new User({
            name: 'limvc',
            username: '情雨随风',
            password: '000000',
            gravatar: 'https://p2.music.126.net/dkwzyF8mm10AptZNSOqzdA==/109951162892007217.jpg',
            gender: 1
        })

    let res = await user.save()

    ctx.body = {
        code: 200,
        data: res,
        message: 'ok'
    }
})


//查询数据
router.get('/user/get', async (ctx) => {
    let res = await User.find({})

    ctx.body = res
})


//删除数据
router.get('/user/delete', async (ctx) => {
    let res = await User.remove({
            name: 'limvc'
        })
    
    ctx.body = res
})


//修改数据
router.get('/user/update', async (ctx) => {
    let res = await User.update(
                    { name: 'limvc' },
                    { password: '123456' })

    ctx.body = res
})


export default router