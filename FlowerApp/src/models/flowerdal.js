// crud operatons with mysqldb 
var mysql=require("../../mysqlconnect");

var Flower=function(Flower)
{
    this.id=Flower.id
    this.title = Flower.title;
    this.description = Flower.description;
    this.unitprice = Flower.unitprice;
    this.quantity = Flower.quantity;
    this.likes=Flower.likes;
};

Flower.createFlower=function(newflower, res){
    console.log("new flower will adding");
    console.log(newflower);
    mysql.query =("insert into flowers set =?"+newflower,function(err,result)
{
        if (err)
        {
        console.log(err);
        result(err,null);
        res.send("Error has been occured  ");
        }
        else{
            console.log(result);
            res.send("flower added Sucessfully");
             }
              })
            };

      Flower.getFlowerById = function (FlowerId, result) {
        mysql.query("Select * from flowers where id = ? ", FlowerId, function (err, res) {             
                        if(err) {
                          console.log("error: ", err);
                          result(err, null);
                        }
                        else{
                          result(null, res);     
                        }
                    });   
        };
        
         Flower.getAllFlower = function (result) {
              console.log("Invoking dal getall Flowers");
              
              mysql.query("Select * from flowers", function (err, res) {
                        if(err) {
                          console.log("error: ", err);
                          result(null, err);
                        }
                        else{
                          console.log('Flowers : ', res);  
                          result(null, res);
                        }
                    });   
        };
        
        Flower.updateById = function(id, Flower, result){
        
          mysql.query("UPDATE flowers SET title = ? WHERE id = ?", [Flower.title, id], 
                      function (err, res) {
                          if(err) {
                                console.log("error: ", err);
                                result(null, err);
                            }
                          else{   
                            result(null, res);
                            }
                        }); 
        };
        
        
        Flower.remove = function(id, result){
          mysql.query("DELETE FROM flowers WHERE id = ?", [id],
                        function (err, res) {
                          if(err) {
                              console.log("error: ", err);
                              result(null, err);
                          }
                          else{
                              result(null, res);
                          }
                    }); 
        };
        module.exports=Flower;

