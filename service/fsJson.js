const fs  = require('fs')

fs.readFile('./goods.json','utf8',function(err,data){

    let newData = JSON.parse(data)
    let pushData = []
    let i = 0
    newData.RECORDS.map(function(value,index){
        if(value.IMAGE1!=null){
            i++
            console.log(value.NAME)
            pushData.push(value)
        } 
    })
    console.log(i)
    //console.log(pushData)
    fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err){
        if(err) console.log('写文件操作失败')
        else console.log('写文件操作成功')
    })
})