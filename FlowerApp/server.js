//const { response } = require('express');
const express=require('express');

var path=require('path');

//const { request } = require('http');
var app=express();

app.use(express.static(path.join(__dirname,'AllData')));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",function(req, res){
res.sendFile("index.html");
});


//router configurations
var routes=require("./src/routes/router");
routes(app);
//app.use('/api/flowers', router);


app.listen(9999);
console.log("Flower App Is Active On Port No 9999");
