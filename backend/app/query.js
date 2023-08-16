
var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let queries = express.Router().post("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("bank");
            // var query ={
            //     customerId: req.body.customerId, 
            //     customerName: req.body.customerName,
            //     email : req.body.email,
            //     AccountNo :req.body.AccountNo,
            //     currentBalance : req.body.currentBalance,
            //     location : req.body.location
            // }
            db.collection("query").insertOne(req.body, function (err, res) {
                if (err) throw err;
                console.log("one document successfully inserted!");
                //db.close();
            });
            db.collection("query").find({}).toArray((err, cust) => {
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

module.exports = queries;