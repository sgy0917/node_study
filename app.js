const express = require('express');
const app = express();

app.get("/",function(req,res){
    res.send('Hello World');
})
//주소를 만들어주는게 가장 중요 

//서버로 실행할 포트를 선언 
app.listen(3000,function(req,res){
    console.log("서버가 실행되고 있다!")
})


