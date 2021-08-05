//a Separate responsibility  for  customer  HTTP request handling

var Customer = require("../models/customersdal");

exports.getAll = function (req, res) {
  console.log("calling controller function");
  Customer.getAllCustomer(function (err, customer) {
    if (err) res.send(err);
    res.send(customer);
  });
};

exports.insert = function (req, res) {
  var newCustomer = new Customer(req.body);
  console.log(newCustomer);

  //handles null error
if (!newCustomer.firstName || !newCustomer.lastName) {
    res.status(400).send({ error: true, message: "Please provide name" });
  } else {
    Customer.createCustomer(newCustomer, function (err, customer) {
      if (err) res.send(err);
      res.json(customer);
    });
  }
};

exports.getBy = function (req, res) {
  Customer.getCustomerById(req.params.id, function (err, customer) {
    if (err) res.send(err);
    res.json(customer);
  });
};

exports.update = function (req, res) {
  Flower.updateById(
    req.params.id,
    new Customer(req.body),
    function (err, customer) {
      if (err) res.send(err);
      res.json(customer);
    }
  );
};

exports.remove = function (req, res) {
  Customer.remove(req.params.id, function (err, customer) {
    if (err) res.send(err);
    res.json({ message: "Customer successfully deleted" });
  });
};
