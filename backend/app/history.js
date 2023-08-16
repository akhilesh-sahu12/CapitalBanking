
var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let history = express.Router().post("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("bank");
            var newCustomer ={ 
                sender: req.body.sender,
                receiver : req.body.receiver,
                amount :req.body.amount,
                transactionID : req.body.transactionID,
                status : req.body.status
            }
            db.collection("history").insertOne(newCustomer, function (err, res) {
                if (err) throw err;
                console.log("one document successfully inserted!");
                //db.close();
            });
            var db = client.db("bank");
            db.collection("history").find({}).toArray((err, hist) => {
                if (err) {
                    throw err;
                } else {
                    res.json(hist);
                    client.close();
                }
            });
        }
    });
});

module.exports = history;