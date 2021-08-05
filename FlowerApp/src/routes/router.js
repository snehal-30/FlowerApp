const express = require('express');
const route = express.Router();


var flowerController=require("../controllers/flowerController");
var orderController=require("../controllers/ordersController");
var orderItemController=require("../controllers/ordersItemController");
var customerController=require("../controllers/customersController");
var productController=require("../controllers/productscontroller");

module.exports = function (app) {

app
.route("/api/customers")
.get(customerController.getAll)
.post(customerController.insert);

app
.route("/api/customers/:id")
.get(customerController.getBy)
.put(customerController.update)
.delete(customerController.remove);

//order HTTP request Mapping
app
.route("/api/orders")
.get(orderController.getAll)
.post(orderController.insert);

app
.route("/api/orders/:id")
.get(orderController.getBy)
.put(orderController.update)
.delete(orderController.remove);

//OrderITEM HTTP request Mapping

app
.route("/api/orderitems")
.get(orderItemController.getAll)
.post(orderItemController.insert);

app
.route("/api/orderitems/:id")
.get(orderItemController.getBy)
.delete(orderItemController.remove);
//prodct HTTP request Mapping

app
.route("/api/products")
.get(productController.getAll)
.post(productController.insert);

app
.route("/api/products/:id")
.get(productController.getBy)
.delete(productController.remove);

app
.route("/api/flowers")
.get(flowerController.getAll)
.post(flowerController.insert);

app
.route("/api/flowers/:id")
.delete(flowerController.remove)
.put(flowerController.update);
/*rou.get('/', flowerController.getAll);
router.post('/', flowerController.insert);*/
};