
var express = require('express');
let bodyParser = require("body-parser");

let mongodb = require("mongodb");
let mongodbClient = mongodb.MongoClient;

let login = express.Router().post("/", (req, res) => {
    mongodbClient.connect("mongodb://localhost", (err, client) => {
        if (err) {
            throw err;
        } else {
            var db = client.db("bank");
            db.collection("bankCustomers").find({}).toArray((err, cust) => {
                if (err) {
                    throw err;
                } else {
                    console.log(req.body.AccountNo);
                    for (let i = 0; i < cust.length; i++) {
                        if (cust[i].email == req.body.email && cust[i].AccountNo == req.body.AccountNo) {
                            res.json(cust[i]);
                            client.close();
                        }
                    }
                    res.json("INVALID CREDENTIALS!!!");
                }
            });
        }
    });
});

module.exports = login;