const Router = require('koa-router')

let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是首页接口"
})


module.exports =router