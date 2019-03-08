'use strict'

import Koa from 'koa'
import logger from 'koa-logger'



import index from './routes/index'

const app = new Koa()


//日志中间件
app.use(logger())


//路由挂载
app.use(index.routes(), index.allowedMethods())


console.log(1)

app.listen(3000, () => {
    console.log(`new http://localhost:3000/`)
})
