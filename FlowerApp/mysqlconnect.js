var mysql=require('mysql');
var connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'snehal',
    database:'flowerapp'
});
connection.connect(function(err){
    if (err) throw err;
    else console.log("mysql connection established!!")
});
module.exports=connection;