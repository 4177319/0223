const { static } = require('express')
const express=require('express')
const app=express()
app.use(express.static('../public'))
app.listen(5000,(err)=>{
    if(err)console.log('失败')
    else console.log('成功')
})
