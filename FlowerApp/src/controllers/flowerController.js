// HTTP handling request for flowers

var Flower = require('../models/flowerdal');

exports.getAll = function(req, res) {
  console.log("calling controller function");
  Flower.getAllFlower(function(err, flower) {
    if (err)
      res.send(err);
    res.send(flower);
  });
};

exports.insert = function(req, res) {
  var newFlower = new Flower(req.body);
  console.log(newFlower);

  //handles null error 
   /*if(newFlower.title ==null || newFlower.unitprice==null ){
      res.status(400).send({ error:true, message: 'Please provide Flower/status' });
    }
   else{*/
    Flower.createFlower(newFlower, function(err, flower) {
      if (err)
      res.send(err);
    res.json(flower);
    });
  }
//};

exports.getBy = function(req, res) {
  Flower.getFlowerById(req.params.id, function(err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};

exports.update = function(req, res) {
  Flower.updateById(req.params.id, new Flower(req.body), function(err, flower) {
    if (err)
      res.send(err);
    res.json(flower);
  });
};

exports.remove = function(req, res) {
  Flower.remove( req.params.id, function(err, flower) {
    if (err)
      res.send(err);
    res.json({ message: 'Flower successfully deleted' });
  });
};
