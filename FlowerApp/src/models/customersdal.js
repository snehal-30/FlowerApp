var mysql = require("../../mysqlconnect");

var Customer = function (Customer) {
  this.firstName = Customer.firstName;
  this.lastName = Customer.lastName;
  this.email = Customer.email;
  this.contact = Customer.contact;
  this.password = Customer.password;
  this.confirmpassword = Customer.confirmpassword;

};
Customer.createCustomer = function (newCustomer, result) {
  console.log("New Customer to be added ");
  console.log(newCustomer);
  mysql.query("INSERT INTO customers SET ?", newCustomer, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};

Customer.getCustomerById = function (id, result) {
  mysql.query(
    "SELECT * FROM customers WHERE id = ? ",
    id,
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

Customer.getAllCustomer = function (result) {
  console.log("Invoking dal getall Customers");

  mysql.query("SELECT * FROM customers", function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      console.log("Customers : ", res);
      result(null, res);
    }
  });
};

Customer.updateById = function (id, Customer, result) {
  mysql.query(
    "UPDATE customers SET firstName=?,lastname=?,email=?, contact=?, password=?, ,confirmpasword=? WHERE id = ?",
    [
      Customer.First_Name,
      Customer.Last_Name,
      Customer.email,
      Customer.contact,
      Customer.password,
      Customer.confPass,
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

Customer.remove = function (id, result) {
  mysql.query(
    "DELETE FROM customers WHERE id = ?",
    id,
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

module.exports = Customer;
