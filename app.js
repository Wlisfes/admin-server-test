'use strict'


import Koa from 'koa'
import json from 'koa-json'
import logger from 'koa-logger'
import bodyparser from 'koa-bodyparser'
import onerror from 'koa-onerror'
import cors from 'koa-cors'
import Router from './routes/index'

const app = new Koa()


//错误处理中间件
onerror(app)

//router日志中间件
app.use(logger())

//cors跨域处理
app.use(cors({
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization', 'Date'],
    maxAge: 100,
    credentials: true,
    allowMethods: ['GET', 'POST', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'X-Custom-Header', 'anonymous'],
}))

//json格式化
app.use(json())

//post参数获取中间件
app.use(bodyparser({
    enableTypes:['json', 'form', 'text']
}))

//router初始化
new Router(app).init()


//错误监听
app.on('error', (err, ctx) => {
    console.error('server error', err, ctx)
})

//监听端口
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})