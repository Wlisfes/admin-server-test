'use strict'

/*
 * @Author: 情雨随风 
 * @Date: 2019-03-14 22:09:20 
 * @Last Modified by: Parker
 * @Last Modified time: 2019-03-18 16:54:40
 * @Types 路由首页
 */


import KoaRouter from 'koa-router'
import item from './item'
import user from './user'
import tubok from './tubok'

export default class Router {
    constructor(app) {
        this.app = app
        this.router = KoaRouter()
    }

    index() {
        this.router.get('/', async(ctx) => {
            ctx.body = `<h1 style="font-size: 60px;
                                   text-align: center;">
                            Holle World
                        </h1>`
        })
        this.app.use(this.router.routes(), this.router.allowedMethods())
    }

    init() {
        //路由挂载
        this.index()
        this.app.use(item.routes(), item.allowedMethods())
        this.app.use(user.routes(), user.allowedMethods())
        this.app.use(tubok.routes(), tubok.allowedMethods())
        
    }
}
