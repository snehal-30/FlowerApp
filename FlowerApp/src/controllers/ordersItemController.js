//a Separate responsibility for order HTTP request handling

var orderitems = require("../models/orderitemsdal");

exports.getAll = function (req, res) {
  console.log("calling controller function");
  orderitems.getAllOrderItem(function (err, orderItem) {
    if (err) res.send(err);
    res.send(orderItem);
  });
};

exports.insert = function (req, res) {
  var newoderitem = new OrderItem(req.body);
  console.log(newoderitem);

  //handles null error
  if (!newoderitem.itemid || !newoderitem.orderid) {
    res
      .status(400)
      .send({ error: true, message: "Please provide prod id and order id" });
  } else {
    orderitems.createOrderItem(newoderitem, function (err, orderItem) {
      if (err) res.send(err);
      res.json(orderItem);
    });
  }
};

exports.getBy = function (req, res) {
  Flower.getFlowerById(req.params.id, function (err, flower) {
    if (err) res.send(err);
    res.json(flower);
  });
};

exports.update = function (req, res) {
  orderitems.updateById(
    req.params.id,
    new orderItem(req.body),
    function (err, orderItem) {
      if (err) res.send(err);
      res.json(orderItem);
    }
  );
};

exports.remove = function (req, res) {
  orderitems.remove(req.params.id, function (err, orderItem) {
    if (err) res.send(err);
    res.json({ message: "Flower successfully deleted" });
  });
};
