'use strict'


import Koa from 'koa'
import json from 'koa-json'
import logger from 'koa-logger'
import bodyparser from 'koa-bodyparser'
import onerror from 'koa-onerror'
import cors from 'koa-cors'


const app = new Koa()


//错误处理中间件
onerror(app)

//router日志中间件
app.use(logger())

//cors跨域处理
app.use(cors())

//json格式化
app.use(json())

//post参数获取中间件
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))


import routerIndex from './routes/index'
import routerUser from './routes/user'
import routerItem from './routes/item'


//路由挂载
app.use(routerIndex.routes(), routerIndex.allowedMethods())
app.use(routerUser.routes(), routerUser.allowedMethods())
app.use(routerItem.routes(), routerItem.allowedMethods())





//错误监听
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

//监听端口
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})