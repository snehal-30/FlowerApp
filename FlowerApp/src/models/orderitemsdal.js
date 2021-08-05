var mysql = require("../../mysqlconnect");

var orderitems = function (orderitems) {
  this.orderid = orderitems.orderid;
  this.itemid = orderitems.itemid;
  this.quantity = orderitems.quantity;
};
orderitems.createOrderItem = function (newOrderItem, result) {
  console.log("New OrderItem to be added ");
  console.log(newOrderItem);
  sql.query("INSERT INTO orderitems SET ?", newOrderItem, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

orderitems.getOrderItemById = function (OrderItemId, result) {
  sql.query(
    "SELECT * FROM orderitems WHERE orderid = ? ",
    OrderItemId,
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

orderitems.getAllOrderItem = function (result) {
  console.log("Invoking dal getall OrderItems");

  sql.query("SELECT * FROM orderitems", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("OrderItems : ", res);
      result(null, res);
    }
  });
};

orderitems.updateById = function (id, pid, OrderItem, result) {
  sql.query(
    "UPDATE orderitems SET quantity = ?,  WHERE orderid = ? AND itemid = ?",
    [
      orderitems.orderid,
      orderitems.itemid,
      orderitems.quantity,
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

orderitems.remove = function (id, pid, result) {
  sql.query(
    "DELETE FROM orderitems WHERE orderid = ? AND itemid = ?",
    [id, pid],
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

module.exports = orderitems;
