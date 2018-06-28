const BASEURL = "https://www.easy-mock.com/mock/5ae2eeb23fbbf24d8cd7f0b6/SmileVue/"
const LOCALURL = "http://localhost:3000/"
const URL ={
    getShopingMallInfo : BASEURL+'index',    //商城首页所有信息
    getGoodsInfo : BASEURL+'getGoodsInfo', 
    registerUser : LOCALURL+'user/register',  //用户注册接口
    login : LOCALURL+'user/login',  //用户登录接口
    getDetailGoodsInfo : LOCALURL+'goods/getDetailGoodsInfo',  //获取商品详情
}

module.exports = URL
