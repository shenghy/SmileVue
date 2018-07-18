<template>
    <div>
        <div class="navbar-div">
            <van-nav-bar title="类别列表" />
        </div>

        <div>
          <van-row>
              <van-col span="6">
                  <div id="leftNav">
                       <ul>
                           <li @click="clickCategory(index,item.ID)" :class="{categoryActice:categoryIndex==index}" v-for="(item , index) in category" :key="index">
                               {{item.MALL_CATEGORY_NAME}}
                           </li>
                       </ul>
                  </div>
                 
              </van-col>
              <van-col span="18">

                  <div class="tabCategorySub">
                      <van-tabs v-model="active">
                          <van-tab v-for="(item,index) in categorySub" :key="index" :title="item.MALL_SUB_NAME">

                          </van-tab>
                      </van-tabs>
                  </div>
              </van-col>
          </van-row>  
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    export default {
        data() {
            return {
                category: [],
                categoryIndex:0,
                categorySub:[],  //小类类别
                active:0,    //激活标签的值
            }
        },
        created(){
            this.getCategory();
           
        },
        mounted(){
            let winHeight = document.documentElement.clientHeight
            document.getElementById("leftNav").style.height=winHeight -46 +'px'
        },
        methods: {
            getCategory() {
                axios({
                    url:url.getCateGoryList,
                    method:'get',
                })
                .then(response=>{
                    console.log(response)
                    if(response.data.code == 200 && response.data.message ){
                      this.category = response.data.message
                      this.getCategorySubByCategoryID(this.category[0].ID)
                    }else{
                        Toast('服务器错误，数据取得失败')
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
                
            },
            clickCategory(index,categoryId){
                 
                this.categoryIndex=index
                this.getCategorySubByCategoryID(categoryId)
            },
            //根据大类ID读取小类类别列表
            getCategorySubByCategoryID(categoryId){
                axios({
                    url:url.getCateGorySubList,
                    method:'post',
                    data:{categoryId:categoryId}
                })
                .then(response=>{
                    console.log(response)
                    if(response.data.code==200 && response.data.message){
                        this.categorySub=response.data.message
                        this.active=0
                        
                    }
                })
                .catch(error=>{
                    console.log(error)
                })
            }
           
        },
    }
</script>

<style scoped>
    #leftNav{
        background-color: aliceblue;
    }
    #leftNav ul li {
        line-height: 2rem;
        border-bottom: 1px solid #E4E7ED;
        padding:3px;
        font-size:0.8rem;
        text-align: center;
    }
    .categoryActice{
        background-color: #fff;
    }
   
</style>