const express = require('express');
const router = express.Router();

//이미지파일 전송 render 데이터 전송 send
router.get("/",function(req,res){
    res.render('index',{title:"EJS 메인페이지"});
    //app.js 설정으로 인해 views 풀더를 지정함 
     
})

router.get("/about", function(req,res){
    res.send('About Page');
})

router.post("/postapi",function(req,res){
    let body = req.body;
    console.log(body);
    res.send('post')
})

module.exports =  router;