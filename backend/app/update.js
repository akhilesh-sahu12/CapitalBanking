
var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let update = express.Router().put("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("bank");
            //var myquery = { empId: req.body.empId };
            // db.collection("employee").updateOne(myquery, req.body, function (err, res) {
            //     if (err) throw err;
            //     else{
            //         console.log("one document successfully updated");
            //     }
                
            // });
            var newvalues = {
              $set: { customerId: req.body.customerId, 
                customerName: req.body.customerName,
                email : req.body.email,
                AccountNo :req.body.AccountNo,
                currentBalance : req.body.currentBalance,
                location : req.body.location
            },
            };
            db.collection("bankCustomers").updateOne({ AccountNo: req.body.AccountNo}, newvalues, (err, result) => {
                if (err) throw err;
                else console.log("one document updated");
              }
            );
            db.collection("bankCustomers").find({}).toArray((err, emp) => {
                if (err) {
                    throw err;
                } else {
                    res.json(emp);
                    client.close();
                }
            });
        }
    });
});

module.exports = update;