const express = require('express');
const helmet = require('helmet');
const app = express();
const ejs = require('ejs');

app.use(helmet());


//html 경로 설정 단순히 그림 전달 x 서버 데이터 전송도 가능 
app.set('view engine' ,'ejs');
app.set('views','./views');

//css 경로설정
app.use('/public',express.static(__dirname + '/public'));

//post 방식을 사용하기위한 app.js 필수 셋팅
app.use(express.json());
app.use(express.urlencoded());
const mainRouter = require('./router/mainRouter');
//mainRouter 에서 보낸 router변수를 가져온다 
app.use('/',mainRouter);


//주소를 만들어주는게 가장 중요 

//서버로 실행할 포트를 선언 
app.listen(3000,function(req,res){
    console.log("서버가 실행되고 있다!")
})



