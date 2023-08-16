
var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let deleteData = express.Router().delete("/", (req, res) => {
    console.log(req.bod);
    mongodbClient.connect("mongodb://localhost", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("bank");
            // var newCustomer ={
            //     customerId: req.body.customerId, 
            //     customerName: req.body.customerName,
            //     email : req.body.email,
            //     AccountNo :req.body.AccountNo,
            //     currentBalance : req.body.currentBalance,
            //     location : req.body.location
            // }
            db.collection("bankCustomers").deleteOne(req.body, function (err, res) {
                if (err) throw err;
                else{
                    console.log("one document successfully deleted!");
                }
            });
            db.collection("bankCustomers").find({}).toArray((err, cust) => {
                if (err) {
                    throw err;
                } else {
                    res.json(cust);
                    client.close();
                }
            });
        }
    });
});

module.exports = deleteData;