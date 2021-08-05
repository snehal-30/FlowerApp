var mysql = require("../../mysqlconnect");

var Order = function (Order) {
  this.customerid = Order.customerid;
  this.orderdate = Order.orderdate;
  this.amount=Order.amount;

};
Order.createOrder = function (newOrder, result) {
  console.log("New Order to be added ");
  console.log(newOrder);
  mysql.query("INSERT INTO orders SET ?", newOrder, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Order.getOrderById = function (OrderId, result) {
  mysql.query(
    "Select * from orders where orderid = ? ",
    OrderId,
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(err, null);
      } else {
        result(null, res);
      }
    }
  );
};

Order.getAllOrder = function (result) {
  console.log("Invoking dal getall Orders");

  mysql.query("Select * from Orders", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Orders : ", res);
      result(null, res);
    }
  });
};

Order.updateById = function (id, Order, result) {
  mysql.query(
    "UPDATE customers SET customerid = ?,orderdate = ?,amount=? WHERE orderid = ?",
    [
      Order.customerid,
      Order.orderdate,
      Order.amount,
   
      id,
    ],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Order.remove = function (id, result) {
  mysql.query("DELETE FROM orders WHERE orderid = ?", id, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Order;
