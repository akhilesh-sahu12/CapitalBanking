var express = require("express");
let bodyParser = require("body-parser");
let mongodb = require("mongodb");


let mongodbClient = mongodb.MongoClient;

let id = express.Router().get("/", (req, res) => {
  mongodbClient.connect("mongodb://localhost", function (err, client) {
    if (err) throw err;
    var db = client.db("bank");
    db.collection("transactionID").find({}).sort({_id:-1}).limit(1).toArray((err, result) =>{
      if (err) throw err;
      res.json(result);
      client.close();
    });
  });
});

module.exports = id;
