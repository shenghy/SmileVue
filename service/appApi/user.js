const Router = require('koa-router')

let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body="这是用户操作首页"
})

router.get('/register',async(ctx)=>{
    ctx.body="用户注册接口"
})

module.exports =router